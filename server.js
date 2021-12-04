require('dotenv').config({path:"./config.env"})
const express = require("express")
const cookieSession = require("cookie-session")
const connectDB = require("./config/db")
const errorHandler = require("./middleware/error")
const cors = require("cors")
require("./config/passport")
const passport = require("passport")


//mongo connection

connectDB()

const app = express()

app.use(express.json())

app.use(cookieSession({
    name: "session",
    maxAge:30*24*60*60*1000,
    keys: [process.env.COOKIE_KEY]
    }))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}))

app.use('/api/auth',require('./routes/auth'))
app.use('/api/sys',require('./routes/system_admin'))
app.use('/api/private',require('./routes/private'))
app.use('/api/theat-admin',require('./routes/theater_admin'))
app.use('/api/home',require('./routes/client'))



//error handler should be the last piece of middleware append before it
app.use(errorHandler)

const PORT = process.env.PORT || 3000
console.log(process.env.MONGO_URI)
const server=app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)})

  process.on('unhandledRejection', (err, promise) => {
    console.log(`Log Error: ${err.message}`)

  })