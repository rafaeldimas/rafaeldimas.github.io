import React from 'react'

import {
  Avatar,
  Anchor,
  Box,
  Nav,
  Sidebar as SidebarBase,
  Heading,
} from 'grommet'

import { LinkAbout, LinkContact, LinkPortfolio, LinkService } from 'sections'

function Sidebar() {
  return (
    <SidebarBase
      width="medium"
      background="light-2"
      elevation="large"
      align="center"
      style={{ position: 'fixed' }}
      header={
        <Box align="center">
          <Avatar
            size="xlarge"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Heading size="small">Rafael Dimas</Heading>
        </Box>
      }
      footer={<Anchor hoverIndicator />}
    >
      <Nav>
        <LinkAbout hoverIndicator />
        <LinkContact hoverIndicator />
        <LinkPortfolio hoverIndicator />
        <LinkService hoverIndicator />
      </Nav>
    </SidebarBase>
  )
}

export default Sidebar
