/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Flex } from "theme-ui"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex style={{
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'space-between',
      background: '#281444',
    }}>
      <Header />
      <main style={{ margin: '1.5rem', height: '100%' }}>{children}</main>
      <footer style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#D6D6D6' }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
