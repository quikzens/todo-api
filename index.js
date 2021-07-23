require('dotenv').config()

const express = require('express')
const router = require('./src/router/router')

const PORT = 3000
const app = express()

app.use(express.json())
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
