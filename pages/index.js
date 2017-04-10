import Head from 'next/head'

import React from 'react'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello World {this.props.userAgent}</p>
      <img src="/static/hrfmmymt.jpg" />
      <style jsx>{`
        p {
          color: #999;
        }
        div {
          background: red;
        }
        img {
          width: 20%;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  }
}
