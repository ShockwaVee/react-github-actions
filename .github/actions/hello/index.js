const core = require('@actions/core');
const github = require('@actions/github');

try {
  throw new Error('an error message');
  const name = core.getInput('who-to-greet');
  console.log(`Hello ${name}`);

  const now = new Date();
  core.setOutput('time', now.toTimeString());

  console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
  core.setFailed(error.message);
}
