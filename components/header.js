import React, { Component } from 'react';
import Link from 'next/link';

export default class Header extends Component {
  render() {
    const linkStyle = {
      marginRight: 15,
    };
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/learn">
          <a style={linkStyle}>Start</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About Me</a>
        </Link>
        <hr />
      </div>
    );
  }
}
