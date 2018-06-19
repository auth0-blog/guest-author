const withCSS = require('@zeit/next-css');
const deployment = require('./config/deployment');

module.exports = withCSS({
  assetPrefix: `${deployment.path}/`,
});
