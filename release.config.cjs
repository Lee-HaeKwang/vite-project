module.exports = {
  branches: [
    'main',           
    { name: 'develop', prerelease: true }
  ],
  repositoryUrl: 'https://github.com/Lee-HaeKwang/vite-project.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    {
      releaseRules: [
        { type: 'docs', scope: 'README', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'hotfix', release: 'patch' }, // 추가 타입에 대응
        { type: 'wip', release: false }, // 이건 릴리즈 제외 처리!
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', '🔥 BREAKING 🔥'],
      },
    },
  ],
};
