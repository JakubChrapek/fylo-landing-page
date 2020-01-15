import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import layoutStyles from "./layout.module.scss"
import headerStyles from "./header.module.scss"

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
  <header>
    <div>
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
