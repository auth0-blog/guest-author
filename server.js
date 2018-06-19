const express = require('express');
const next = require('next');
const router = require('./api');
const deployment = require('./config/deployment');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', router);

  server.use((req, res) => {
    req.url = req.url.replace(deployment.path, '');
    req.url = req.url || '/';
    handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
