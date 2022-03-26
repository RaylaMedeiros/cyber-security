import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: '1.5rem',
      borderBottom: '1px solid',
      borderColor: '#1C0E2F'
    }}
  >
      <h5 style={{ margin: 0, textTransform: 'capitalize' }}>
        <Link
          to="/"
          style={{
            color: '#D6D6D6',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
      </h5>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
