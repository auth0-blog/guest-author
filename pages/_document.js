import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
      <Head>
        <title>The Auth0 Guest Author Program</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/favicon.png" />
        <link rel="stylesheet" href="./static/index.css" />
        {this.props.styleTags}
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </html>
    )
  }
}
