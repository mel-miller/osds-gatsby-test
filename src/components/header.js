import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
  <header style={{ background: `#eee` }}>
    <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `0.5rem` }}>
      <div id="site-name">{site.siteMetadata.title}</div>
    </div>
  </header>
  )
}

export default Header