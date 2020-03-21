const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please add some content']
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', TodoSchema)