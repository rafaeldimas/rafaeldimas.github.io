import React from 'react'

import {
    Avatar,
    Anchor,
    Box,
    Nav,
    Sidebar,
    Heading
} from 'grommet'

// import {  } from './style';

const Header = () => {
    return (
        <Sidebar
            width='small'
            background="light-2" 
            elevation='large'
            align='center'
            header={
                <Box align='center'>
                    <Avatar size='xlarge' src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                    <Heading size='small' level='2'>Rafael Dimas</Heading>
                </Box>
            }
            footer={
                <Anchor hoverIndicator />
            }
        >
            <Nav>
                <Anchor label='Services' hoverIndicator></Anchor>
                <Anchor label='Projects' hoverIndicator></Anchor>
                <Anchor label='Timer' hoverIndicator></Anchor>
            </Nav>
        </Sidebar>
    )
}

export default Header