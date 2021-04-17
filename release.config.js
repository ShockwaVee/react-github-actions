module.exports = {
  branches: ['main', { name: 'develop', prerelease: true }],
  repositoryUrl: 'https://github.com/ShockwaVee/react-github-actions',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
