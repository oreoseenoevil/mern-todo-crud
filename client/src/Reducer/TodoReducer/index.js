export function TodoReducer (state, action) {
  switch(action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        loading: false,
        todos: action.payload
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          const { id, content, isCompleted } = action.payload
          if (todo._id === id) {
            todo.content = content,
            todo.isCompleted = isCompleted
          }
          return todo
        })
      }
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: [ ...state.todos.map(todo => {
          if (todo._id === action.payload) {
            todo.isCompleted = !todo.isCompleted
          }
          return todo
        })]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      }
    case 'ERROR_TODO':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
