import React from 'react'
import { Grommet, Grid, Box } from 'grommet';

import selectTheme from './themes'

import Header from './components/Header'

import {
  SectionAbout,
  SectionContact,
  SectionPortfolio,
  SectionService,
} from './sections'

function App() {
  return (
    <Grommet theme={selectTheme('dark')} full>
      <Grid
        rows={['full']}
        columns={['auto', 'flex']}
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [0, 0] },
          { name: 'main', start: [1, 0], end: [1, 0] },
        ]}
        full
      >
        <Header gridArea="header" />
        <Box gridArea="main">
          <SectionAbout style={{ width: '100%', height: '100vh', background: '#000' }}/>
          <SectionContact style={{ width: '100%', height: '100vh', background: '#111' }}/>
          <SectionPortfolio style={{ width: '100%', height: '100vh', background: '#222' }}/>
          <SectionService style={{ width: '100%', height: '100vh', background: '#333' }}/>
        </Box>
      </Grid>
    </Grommet>
  )
}

export default App
