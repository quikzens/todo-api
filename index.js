require('dotenv').config()

const express = require('express')
const router = require('./src/router/router')

const PORT = process.env.PORT_NUMBER
const app = express()

// Middleware for connect to DB
const { connectDB } = require('./src/middleware/connectDB')

app.use(express.json())
app.use(connectDB)

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
