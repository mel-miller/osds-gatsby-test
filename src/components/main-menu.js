import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
  float: right;
`

const MenuLink = styled(Link)`
  color: #b00;
  text-decoration: none;
  font-size: 17px;
  line-height: 1.9;
  font-weight: 600;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &[aria-current="page"] {
    border-bottom: 2px solid black;
    text-decoration: none;
    padding-bottom: 2px;
  }

  &:focus {
    outline: 2px solid black;
    outline-offset: 4px;
  }
`

const MainMenu = () => (
  <Menu aria-label="Main navigation">
    <MenuLink to="/alert-example">Alert</MenuLink>
  </Menu>
)

export default MainMenu
