const express = require('express')
const router = express.Router()

const { 
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo } = require('../controllers/todos')

router.route('/')
  .get(getTodos)
  .post(addTodo)

router.route('/:id')
  .get(getTodo)
  .patch(updateTodo)
  .delete(deleteTodo)

module.exports = router
