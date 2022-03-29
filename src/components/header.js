import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      padding: '1.5rem',
      borderBottom: '1px solid',
      borderColor: '#1C0E2F'
    }}
  >
      <h4 style={{ margin: 0, textTransform: 'capitalize' }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
      </h4>
  </header>
)

export default Header
