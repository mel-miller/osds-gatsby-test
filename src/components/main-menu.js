import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
  float: right;
`

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 17px;
  line-height: 2;
  font-weight: 600;
  margin-right: 20px;

  &:last-child {
    margin-right: 10px;
  }

  &:hover,
  &[aria-current="page"] {
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

const MainMenu = () => (
  <Menu aria-label="Main navigation">
    <MenuLink to="/alerts">Alerts</MenuLink>
    <MenuLink to="/buttons">Buttons</MenuLink>
  </Menu>
)

export default MainMenu
