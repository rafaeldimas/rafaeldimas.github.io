import React from 'react'

import { Avatar, Box, Heading } from 'grommet'

function Header() {
  return (
    <Box align="center">
      <Avatar
        size="xlarge"
        src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
      />
      <Heading size="small">Rafael Dimas</Heading>
    </Box>
  )
}

export default Header
