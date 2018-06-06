# Guest Author Tool

The initial idea that resulted in this tool aimed on facilitating the onboarding process of authors in the [Auth0 Guest Author Program](https://auth0.com/guest-authors).

## Technical Details

This tool was built primarily with Node.js, React, Next.js, and MongoDB.

### Running Locally

To run the tool in your development machine, you will need to fork and clone this repository, then you will to build and run it through the following commands:

```bash
# install dependencies
npm i

# set the env variables
export MONGO_URL=mongodb://some-user:some-password@some-url:27017/some-database
export SLACK_TOKEN=xoxb-1234567890-12345678901-NsPHWhHpDe9HdoSFjlJzzfCN
export SLACK_CHANNEL=C4WOJRZM2

# start the development process
npm run dev
```

> *Note:* If you are using an IDE (you should), you can probably define environment variables on some launch configuration that you can set up in your IDE. This approach is easier (as it persists) than remembering to run `export MONGO_URL` every time.

> *Note 2:* `SLACK_CHANNEL` refers to the ID of a Slack channel, not the name. [Refer to this resource to see how to easily find out the ID of a Slack channel](https://stackoverflow.com/a/40965105/1232793).

After that, you *would* be able to access the tool through this URL: [`http://localhost:3000/`](http://localhost:3000/). Note that you actually *won't* be able to use this URL because the application relies on [the Auth0's silent authentication method](https://auth0.com/docs/api-auth/tutorials/silent-authentication) and this method denies authentication attempts originating from `localhost`.

As such, you will need to define a custom domain (a fake one) in your `/etc/hosts` file. Something like:

```bash
# ... other host configs ...

127.0.0.1	app.local
```

Then you can go to [http://app.local:3000/](http://app.local:3000/) to access the tool.

## Continuous Deployment

For the moment, this repository does not contain any configuration regarding [Continuous Delivery](https://www.thoughtworks.com/continuous-integration) per se. What this repository contains though is Travis configured as the Continuous Deployment tool. More specifically, whenever a push is made to this repository, Travis triggers a deployment process on [Now](https://zeit.co/now) (the chosen host for this repository).

### Technical Details

If you take a look, you will see that [the `.travis.yml` file](./.travis.yml) contains a property called `secure` under `env.matrix` and that this property contains a token. This token is actually a [Now](https://zeit.co/now) token [encrypted with the help of the following command](https://docs.travis-ci.com/user/environment-variables/#Encrypting-environment-variables):

```bash
travis encrypt NOW_TOKEN=123ABC --add env.matrix
```

> To use this command, replace `123ABC` with a  Now token.

The advantage of this approach is that by encrypting the Now token, we make it possible to commit it to a public repository like this one. To create this encrypted token, Travis used a public token that can be read only with a private token attached to [this repository on Travis itself](https://travis-ci.org/auth0-blog/guest-author). Now, when Travis detects a push to this repository, it creates an environment variable called `NOW_TOKEN` that contains the unencrypted version of the Now token and uses it to deploy the new version securely.

Another important concept to have in mind is regarding the script associated with the `master` branch on [the `.travis.yml` file](./.travis.yml):

```bash
now --token $NOW_TOKEN && now alias --token $NOW_TOKEN
```

This command, besides using the `NOW_TOKEN` env variable, [relies on a file called [`now.json`](./now.json) to know how to create Now aliases properly](https://zeit.co/docs/other/faq#how-do-i-deploy-and-alias-in-a-single-command).
