require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

// middleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000', // разрешить запросы с фронтенда
  credentials: true, // если нужно передавать куки
}));

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
    console.log('Failed to connect to db')
  })

  // routes
  app.use('/api/users', userRoutes)
  app.use('/api/auth', authRoutes)

  app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  

  