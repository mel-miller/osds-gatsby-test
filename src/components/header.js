import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import MainMenu from "../components/main-menu"

const SiteName = styled.span`
  font-size: 20px;
  font-weight: 700;
`

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
      <SiteName id="site-name">{site.siteMetadata.title}</SiteName>
      <MainMenu />
    </div>
  </header>
  )
}

export default Header