import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const SiteNav = () => (
  <nav>
    <ul>
      <Link to="#features">
        <li>Features</li>
      </Link>
      <Link to="#team">
        <li>Team</li>
      </Link>
      <Link to="#signin">
        <li>Sign In</li>
      </Link>
    </ul>
  </nav>
)
const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `1.45rem 3.0875rem`,
      }}
    >
      <img src={logo} />
      <SiteNav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
