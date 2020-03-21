import React from 'react'
import { Box } from '@material-ui/core'

export const Header = ({title}) => {
  return (
    <Box style={{ textAlign: 'center' }}>
      <h2>{title}</h2>
    </Box>
  )
}
