import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import MainMenu from "../components/main-menu"

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #b00;
    text-decoration: none;
    padding-bottom: 2px;
  }

  &:focus {
    color: #b00;
    outline: 2px solid black;
    outline-offset: 4px;
  }
`

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
  <header style={{ background: `#f2f2f2` }}>
    <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `0.5rem` }}>
      <HomeLink to="/">
        <SiteName id="site-name">{site.siteMetadata.title}</SiteName>
      </HomeLink>
      <MainMenu />
    </div>
  </header>
  )
}

export default Header