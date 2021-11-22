const express = require('express')
const router = express.Router()
const {Add_show,get_shows,get_show_movie} = require("../controllers/theater_admin")

router.route("/addshow").post(Add_show)
router.route("/getshow-theat").get(get_shows)
router.route("/getshow-movie").get(get_show_movie)

module.exports=router