/* eslint-env node */
/* eslint-disable no-console */

const execSync = require('child_process').execSync;

const SUBJECT_REGEX = /(\w+?)(!)?:.*/i;

const createItem = (title, body) => {
  return title &&
    body?.length &&
`## ${title}

${body.join('\n')}
`;
};

function formatCommit(commit) {
  const taskFooter = commit.footers.find((footer) => footer.startsWith('Task:'));
  let taskId;

  if (taskFooter) {
    taskId = taskFooter.split(':')[1]?.trim();
  }
  return commit.changes
    .map((change) => `* ${change}${taskId ? ` - [Task-${taskId}](https://app.productive.io/109-productive/tasks/task/${taskId})` : ''}`)
    .join('\n');
}

function cleanBody(body) {
  return body
    .reduce((acc, bodyItem) => {
      return acc.concat(bodyItem.split('\n'));
    }, [])
    .map((bodyItem) => {
      return bodyItem
        .replace('*', '')
        .trim();
    })
    .filter(Boolean);
}

function parseMessage(commit) {
  const lines = commit
    .split(/\n{2}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (!lines.length) {
    return null;
  }

  const subject = lines[0];
  const body = lines.length > 2 ?
    lines.slice(1, lines.length - 1) :
    lines.slice(1);
  const footers = lines.length > 2 ?
    lines[lines.length - 1]
      .split('\n')
      .filter(Boolean) :
    [];

  const subjectMatch = subject.trim().match(SUBJECT_REGEX);
  const type = subjectMatch?.[1];

  if (!type || !body.length) {
    return null;
  }

  const isBreaking = Boolean(subjectMatch?.[2]);

  const changes = cleanBody(body)
    .map((change) => {
      return `${isBreaking ? '⚠️ ' : ''}${change}`;
    })
    .filter((change) => !(/Task:\s\d+/i).test(change));
    // Remove formatted data from body - invalid message

  if (changes.length === 0) {
    return null;
  }

  return {
    type,
    changes,
    footers
  };
}

async function main() {
  const delimiter = '-----';
  const commits = execSync(`git log origin/main..HEAD --pretty='format:%s%n%n%b${delimiter}'`)
    .toString()
    .replaceAll('\r\n', '\n')
    .split(delimiter)
    .map(parseMessage)
    .filter(Boolean)
    .reduce((acc, commit) => {
      acc[commit.type] = (acc[commit.type] ?? []).concat(commit);
      return acc;
    }, {});

  const featuresList = [...(commits.feature ?? []), ...(commits.feat ?? [])].map((commit) => formatCommit(commit));
  const updatesList = commits.update?.map((commit) => formatCommit(commit));
  const betaFlagsList = commits.beta?.map((commit) => formatCommit(commit));
  const bugsList = commits.fix?.map((commit) => formatCommit(commit));

  const rendered = [
    createItem('🧭 New Features', featuresList),
    createItem('⭐️ Updates', updatesList),
    createItem('🧪 Beta features', betaFlagsList),
    createItem('🐞 Bugs Fixed', bugsList)
  ]
    .filter(Boolean)
    .join('\n');

  execSync(`echo "${rendered}" | pbcopy`);
  console.log(rendered);
  console.log('Release note copied to clipboard');
}

main();
