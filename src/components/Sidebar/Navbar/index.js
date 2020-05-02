import React from 'react'

import { Nav } from 'grommet'

import { LinkAbout, LinkContact, LinkPortfolio, LinkService } from 'sections'

function Navbar() {
  return (
    <Nav>
      <LinkAbout hoverIndicator />
      <LinkService hoverIndicator />
      <LinkPortfolio hoverIndicator />
      <LinkContact hoverIndicator />
    </Nav>
  )
}

export default Navbar
