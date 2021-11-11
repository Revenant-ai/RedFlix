require('dotenv').config({path:"./config.env"})
const express = require("express")
const connectDB = require("./config/db")

//mongo connection
connectDB()

const app = express()

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

const PORT = process.env.PORT || 3000

const server=app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)})

  // process.on('unhandledRejection', (err, promise) => {
  //   console.log(`Log Error: ${err.message}`)
  //   // Close server & exit process
  //   server.close(() => process.exit(1))
  // })