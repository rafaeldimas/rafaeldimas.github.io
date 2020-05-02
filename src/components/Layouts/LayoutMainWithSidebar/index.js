import React from 'react'
import { Grid } from 'grommet'

function LayoutMainWithSidebar({ sidebarName, mainName, children, ...props }) {
  const rows = ['full']

  const columns = ['auto', 'flex']

  const areas = [
    {
      name: sidebarName,
      start: [0, 0],
      end: [0, 0],
    },
    {
      name: mainName,
      start: [1, 0],
      end: [1, 0],
    },
  ]

  return (
    <Grid
      full
      gap="small"
      rows={rows}
      columns={columns}
      areas={areas}
      {...props}
    >
      {children}
    </Grid>
  )
}

export default LayoutMainWithSidebar
