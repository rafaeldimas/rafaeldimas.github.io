import React from 'react'
import { Grommet, Box } from 'grommet'

import selectTheme from 'themes'

import Sidebar from 'components/Sidebar'
import { LayoutMainWithSidebar } from 'components/Layouts'

import {
  SectionAbout,
  SectionContact,
  SectionPortfolio,
  SectionService,
} from 'sections'

const GRID_SIDEBAR_NAME = 'sidebar'
const GRID_MAIN_NAME = 'main'

function App() {
  return (
    <Grommet theme={selectTheme('dark')} full>
      <LayoutMainWithSidebar
        sidebarName={GRID_SIDEBAR_NAME}
        mainName={GRID_MAIN_NAME}
      >
        <Sidebar gridArea={GRID_SIDEBAR_NAME} />
        <Box gridArea={GRID_MAIN_NAME}>
          <SectionAbout />
          <SectionService />
          <SectionPortfolio />
          <SectionContact />
        </Box>
      </LayoutMainWithSidebar>
    </Grommet>
  )
}

export default App
