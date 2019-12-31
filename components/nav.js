import React from "react";
import Link from "next/link";
import Router from "next/router";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4QKB82"
        height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
        <div className="container">
          <div className="navbar-header">
            <Link href="/">
              <div className="logo-top" />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <Link to="/guide">외주 GUIDE</Link>
            </li> */}
            {/* <li>
              <Link href="/pay">PAYMENT</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;