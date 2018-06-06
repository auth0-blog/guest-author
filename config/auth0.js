const devConfig = {
  audience: 'https://auth0-blog.github.io/onboard/',
  basename: '/',
  clientID: 'iYi0tC5KJJa7nFxAoNT65iUroLuYN54B',
  domain: 'auth0-blog.auth0.com',
};

const prodConfig = {
  audience: 'https://auth0-blog.github.io/onboard/',
  basename: '/onboard',
  clientID: 'HPzKOMp0LP4k30TJwIDB74T5GWHYuAQq',
  domain: 'auth0-blog.auth0.com',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

module.exports = {
  ...config
};
