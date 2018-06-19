const express = require('express');
const next = require('next');
const router = require('./api');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', router);
  //
  // server.use('/guest-authors/onboard/static', express.static(__dirname + '/static', {
  //   maxage: dev ? '0' : '365d',
  // }));
  //
  // server.get('/guest-authors/onboard', (req, res) => {
  //   const actualPage = `/${req.params['0']}`;
  //   console.log(actualPage);
  //   app.render(req, res, '/index');
  // });
  //
  // server.get('/guest-authors/onboard/*', (req, res) => {
  //   const actualPage = `/${req.params['0']}`;
  //   console.log(actualPage);
  //   app.render(req, res, actualPage);
  // });

  server.use('/_next/*', (req, res) => {
    const newURL = req.originalUrl.replace('_next', 'admin/_next');
    res.redirect(newURL);
  });

  server.use((req, res) => {
    req.url = req.url.replace('/prefix', '');
    req.url = req.url || '/';
    console.log('======================', req.url || '/');
    handle(req, res);
  });

  // server.get('*', (req, res) => {
  //   return handle(req, res);
  // });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
