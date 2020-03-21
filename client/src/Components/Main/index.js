import React, { useContext, Fragment, useEffect } from 'react'
import { TodoList } from '@Components/Main/TodoList'
import { TodoContext } from '@Context/TodoContext'
import { Box } from '@material-ui/core'

export const Main = () => {
  const { todos, getTodos } = useContext(TodoContext)

  useEffect(() => {
    getTodos()
  }, [])

  const todoList = todos.length ? (
    <Fragment>
      {todos.map(todo => (
        <TodoList 
          key={todo._id}
          id={todo._id}
          content={todo.content}
          isCompleted={todo.isCompleted}
        />
      ))}
    </Fragment>
  ) : (
    <Box display='flex' alignItems='center' justifyContent='center'>
      No more Todo&apos;s left!!!
    </Box>
  )

  return (
    <Fragment>
      {todoList}
    </Fragment>
  )
}
