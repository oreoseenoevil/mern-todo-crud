const Todo = require('../models/Todo')

// Get all Todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()

    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// Get Todo
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id, req.body)

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      })
    }

    return res.status(200).json({
      success: true,
      data: todo
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}


// Create new Todo
exports.addTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body)

    return res.status(201).json({
      success: true,
      data: todo
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Update Todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      })
    } else {
      return res.status(201).json({
        success: true,
        data: todo
      })
    }
    
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Delete Todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      })
    }

    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}
