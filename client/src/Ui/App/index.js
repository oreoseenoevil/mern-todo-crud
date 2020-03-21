import React, { Fragment } from 'react'
import { Header } from '@Components/Header'
import { Main } from '@Components/Main'
import { Footer } from '@Components/Footer'
import { TodoContextProvider } from '@Context/TodoContext'
import { Box, CssBaseline, Typography } from '@material-ui/core'

export const App = () => {
  return (
    <TodoContextProvider>
      <Fragment>
        <CssBaseline />
        <Typography />
        <Box 
          id='boxTodo'
          display='flex'
          justifyContent='flex-end'
          flexDirection='column'
          style={{
            height: '500px',
            width: '330px',
          }}
          border={1}
        >
          <Header title='Creator&apos;s Todo List' />
          <Box
            className='boxTodo'
            flexGrow={1}
          >
            <Main />
          </Box>
          <Footer />
        </Box>
      </Fragment>
    </TodoContextProvider>
  )
}
