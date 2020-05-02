import React from 'react'

import { Sidebar as SidebarBase } from 'grommet'

import Header from 'components/Sidebar/Header'
import Navbar from 'components/Sidebar/Navbar'
import Footer from 'components/Sidebar/Footer'

function Sidebar() {
  const style = { position: 'fixed' }

  return (
    <SidebarBase
      width="medium"
      background="light-2"
      elevation="large"
      align="center"
      style={style}
      header={<Header />}
      footer={<Footer />}
    >
      <Navbar />
    </SidebarBase>
  )
}

export default Sidebar
