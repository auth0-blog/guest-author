const { WebClient } = require('@slack/client');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const express = require('express');
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');
const config = require('../config/auth0');

const prod = process.env.NODE_ENV === 'production';

const router = express.Router();

router.use(bodyParser.json());
router.use(authenticationFilter);

router.get('/', getApplications);
router.post('/', createApplication);

module.exports = router;

// functions definitions

function authenticationFilter(req, res, next) {
  const issuer = `https://${config.domain}/`;

  return jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${issuer}.well-known/jwks.json`
    }),
    audience: config.audience,
    issuer: issuer,
    algorithms: [ 'RS256' ]
  })(req, res, next);
}

async function getApplications(req, res, next) {
  const collection = await getCollection();

  collection.find({}).toArray((err, result) => {
    if (err) return next(err);
    res.status(200).send(result);
  });
}

async function createApplication(req, res, next) {
  const APP_URL = prod ? 'https://auth0.com/guest-authors/onboard' : 'http://app.local:3000';
  const collection = await getCollection();

  const model = {
    name: req.body.name,
    email: req.body.email,
    sample: req.body.sample,
  };

  collection.insertOne(model, async (err, result) => {
    if (err) return next(err);

    const web = new WebClient(process.env.SLACK_TOKEN);
    const botMessage = `<!here>, ${req.body.name} just applied to the Guest Author Program with the following email address: ${req.body.email}`;
    const slackRes = await web.chat.postMessage({ channel: process.env.SLACK_CHANNEL, text: botMessage });

    res.status(200).send(slackRes.ts);
  });
}

function getCollection() {
  const collectionName = 'guest-author-candidates';

  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) return reject(err);
      const db = client.db('auth0-blog-onboard');
      resolve(db.collection(collectionName));
    });
  });
}
