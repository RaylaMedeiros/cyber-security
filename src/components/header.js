import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      padding: '1.5rem',
      borderBottom: '1px solid',
      borderColor: '#D6D6D6',
      position: 'fixed',
      top:0,
      left:0,
      width: '100%',
      backgroundColor: '#281444',
      zIndex: 9999
    }}
  >
      <h4 style={{ margin: 0, textTransform: 'capitalize' }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            paddingBottom: '0.125rem',
            borderBottom: '2px solid'
          }}
        >
          Home
        </Link>
      </h4>
  </header>
)

export default Header
