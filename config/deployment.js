const devConfig = {
  path: '/guest-authors/onboard'
};

const prodConfig = {
  path: '/guest-authors/onboard'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

module.exports = {
  ...config
};
