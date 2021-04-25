const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

const todos = require('./routes/todos')
const users = require('./routes/users')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/todos', todos)
app.use('/api/users', users)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))
