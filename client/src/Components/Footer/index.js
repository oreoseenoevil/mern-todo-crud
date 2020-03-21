import React, { useState, useContext, Fragment, createRef } from 'react'
import { TodoContext } from '@Context/TodoContext'
import { Box, TextField } from '@material-ui/core'
import { AddCircleOutline } from '@material-ui/icons'

export const Footer = () => {
  const [content, setContent] = useState('')

  const userInputRef = createRef()
  const textAreaFocus = () => userInputRef.current.focus()

  const { addTodo } = useContext(TodoContext)

  const handleKeyPress = e => {
    const newTodo = {
      content,
      isCompleted: false
    }
    if (!content) return
    if (e.key === 'Enter') {
      addTodo(newTodo)
      setContent('')
    }
  }

  return (
    <Box 
      display='flex'
      alignItems='flex-end'
    >
      <Box p={1}>
        <AddCircleOutline
          style={{ cursor: 'pointer' }}
          onClick={textAreaFocus}
        />
      </Box>
      <Box p={1} width={1}>
        <TextField
          value={content}
          ref={userInputRef}
          onChange={e => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Add new Todo'
          fullWidth
        />
      </Box>
    </Box>
  )
}
