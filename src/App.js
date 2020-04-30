import React from 'react'
import { Grommet } from 'grommet';

import selectTheme from './themes'

import Header from './components/Header'

function App() {
  return (
    <Grommet theme={selectTheme('dark')} full>
      <Header />
    </Grommet>
  )
}

export default App
