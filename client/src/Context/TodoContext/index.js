import React, { createContext, useReducer } from 'react'
import { TodoReducer } from '@Reducer/TodoReducer'
import axios from 'axios'

const initialState = {
  todos: [],
  error: null,
  loading: true
}

export const TodoContext = createContext(initialState)


export const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos')

      dispatch({
        type: 'GET_TODOS',
        payload: res.data.data
      })

    } catch (err) {
      dispatch({
        type: 'ERROR_TODO',
        payload: err.response.data.error
      })
    }
  }

  const addTodo = async todo => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/todos', todo, config)

      dispatch({
        type: 'ADD_TODO',
        payload: res.data.data
      })

    } catch (err) {
      dispatch({
        type: 'ERROR_TODO',
        payload: err.response.data.error
      })
    }
  }

  const deleteTodo = async id => {
    try {
      await axios.delete(`api/todos/${id}`)

      dispatch({
        type: 'DELETE_TODO',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TODO',
        payload: err.response.data.error
      })
    }
  }

  const completeTodo = async id => {
    try {
      dispatch({
        type: 'COMPLETE_TODO',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TODO',
        payload: err.response.data.error
      })
    }
  }

  const editTodo = async todo => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.patch(`/api/todos/${todo.id}`, todo, config)

      dispatch({
        type: 'EDIT_TODO',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TODO',
        payload: err.response.data.error
      })
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo,
        getTodos
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}
