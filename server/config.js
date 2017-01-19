module.exports = {
  port: process.env.PORT || 9080,
  GITHUB_CLIENT_ID:'ee052bcbb3a5ad8e880f',
  GITHUB_CLIENT_SECRET:'06b34a731ddf7efbdd84ba971afc69c73f60f525',
  GITHUB_ORGANISATION:'ziggurate-v2',
  MONGO_URL:'mongodb://localhost/ziggurate',
  JWT_SECRET: process.env.JWT_SECRET || 'clintjose08',
  USER_AGENT: process.env.USER_AGENT || 'ReactBoilerplate'
};
