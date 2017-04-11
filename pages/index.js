import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

const handler = () => Router.push({
  pathname: 'about',
  query: { name: 'Zeit' }
})

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
        <style>{`
          body,
          html,
          div,
          p,
          img,
          a,
          ul,
          li,
          nav {
            margin: 0;
            padding: 0;
          }
        `}
        </style>
      </Head>
      <p>Hello World {this.props.userAgent}</p>
      <img src="/static/hrfmmymt.jpg" />
      <nav>
        <ul>
          <li><Link prefetch href='/'><a>Home</a></Link></li>
          <li><Link prefetch href='/about'><a>About</a></Link></li>
          <li><Link prefetch href='/contact'><a>Contact</a></Link></li>
        </ul>
      </nav>
      <style jsx>{`
        p {
          color: #999;
        }
        div {
          background: #f0f0f0;
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
