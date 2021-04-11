module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/ShockwaVee/react-github-actions',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};