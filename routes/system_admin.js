const express = require('express')
const router = express.Router()
const { Add_movie,Add_theater }= require("../controllers/system_admin")

router.route("/addmovie/:id").put(Add_movie)
router.route("/addthet").post(Add_theater)


module.exports=router