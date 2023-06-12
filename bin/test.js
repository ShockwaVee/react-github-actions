const execSync = require('child_process').execSync;

const commits = execSync(`git log master..HEAD --pretty='format:%s%n%n%b${delimiter}'`)
    .toString()
    .replaceAll('\r\n', '\n')
    .split(delimiter)
    .map(parseMessage)
    .filter(Boolean)
    .reduce((acc, commit) => {
      acc[commit.type] = (acc[commit.type] ?? []).concat(commit);
      return acc;
    }, {});

console.log(commits + ' heheooo');
