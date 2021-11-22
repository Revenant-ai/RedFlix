require('dotenv').config({path:"./config.env"})
const express = require("express")
const connectDB = require("./config/db")
const errorHandler = require("./middleware/error")

//mongo connection
connectDB()

const app = express()

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/sys',require('./routes/system_admin'))
app.use('/api/private',require('./routes/private'))
app.use('/api/home',require('./routes/home'))
app.use('/api/theat-admin',require('./routes/theater_admin'))


//error handler should be the last piece of middleware append before it
app.use(errorHandler)

const PORT = process.env.PORT || 3000
console.log(process.env.MONGO_URI)
const server=app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)})

  process.on('unhandledRejection', (err, promise) => {
    console.log(`Log Error: ${err.message}`)
    
  })