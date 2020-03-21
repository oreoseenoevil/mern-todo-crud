import React, { Fragment, useContext, useState, useEffect } from 'react'
import { TodoContext } from '@Context/TodoContext'
import { Divider, Box, TextField } from '@material-ui/core'
import { 
  DeleteOutlined, 
  CheckBoxOutlineBlank, 
  CheckBox, 
  EditOutlined,
  CancelOutlined } from '@material-ui/icons'

export const TodoList = (props) => {
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState(props.content)

  const { deleteTodo, completeTodo, editTodo } = useContext(TodoContext)

  const updateSubmit = e => {
    const updateTodo = {
      id: props.id,
      content,
      isCompleted: props.isCompleted
    }
    if (!content) return
    if (e.key === 'Enter') {
      editTodo(updateTodo)
      setEdit(false)
    }
  }

  return (
    <Fragment>
      {edit ? (
        <Box display='flex'
          alignItems='center'
          width={1}
        >
          <Box p={1}>
            {props.isCompleted ? (
              <CheckBox
                onClick={() => completeTodo(props.id)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <CheckBoxOutlineBlank 
                onClick={() => completeTodo(props.id)} 
                style={{ cursor: 'pointer' }}
              />
            )}
          </Box>
          <Box 
            p={1} 
            flexGrow={1}
          >
            <Box p={1} w={1}>
              <TextField
                value={content}
                onChange={e => setContent(e.target.value)}
                onKeyPress={updateSubmit}
              />
            </Box>
          </Box>
          <Box p={1}>
            <CancelOutlined
              onClick={() => {
                setContent(props.content)
                setEdit(false)
              }} 
              style={{ cursor: 'pointer' }}
            />
          </Box>
        </Box>
      ) : (
        <Box display='flex'
          alignItems='center'
          width={1}
        >
          <Box p={1}>
            {props.isCompleted ? (
              <CheckBox
                onClick={() => completeTodo(props.id)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <CheckBoxOutlineBlank 
                onClick={() => completeTodo(props.id)} 
                style={{ cursor: 'pointer' }}
              />
            )}
          </Box>
          <Box 
            p={1} 
            flexGrow={1} 
            style={{ 
              textDecoration: props.isCompleted ? 'line-through' : '',
              opacity: props.isCompleted ? '0.5' : '1'
            }}
          >
            {content}
          </Box>
          <Box>
            <EditOutlined
              onClick={() => setEdit(true)}
              style={{ cursor: 'pointer' }}
            />
          </Box>
          <Box p={1}>
            <DeleteOutlined 
              onClick={() => deleteTodo(props.id)} 
              style={{ cursor: 'pointer' }}
            />
          </Box>
        </Box>
      )}
      <Divider />
    </Fragment>
  )
}
