const express = require('express')
const router = express.Router()
const { Add_movie }= require("../controllers/system_admin")

router.route("/addmovie").post(Add_movie)


module.exports=router