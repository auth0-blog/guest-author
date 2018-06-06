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
