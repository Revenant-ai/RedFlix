const express = require('express')
const router = express.Router()
const {Add_show,get_shows,get_show_movie,Add_screen,Get_screen,Get_show,Get_theater_Details} = require("../controllers/theater_admin")
const {check_admin} = require("../middleware/auth")
const {getPrivateData}=require("../controllers/private")
const{protect}=require("../middleware/auth")

router.route("/addshow").post(Add_show)
router.route("/getshow-theat").get(get_shows)
router.route("/getshow-movie").get(get_show_movie)
router.route("/addscreen").post(Add_screen)
router.route("/getscreen").get(Get_screen)
router.route("/getshow").get(Get_show)
router.route("/gettheater/:theaterid").get(Get_theater_Details)

module.exports=router