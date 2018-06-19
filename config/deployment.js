const devConfig = {
  path: ''
};

const prodConfig = {
  path: '/prefix'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

module.exports = {
  ...config
};
