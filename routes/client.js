const express = require('express')
const router = express.Router()

const {Get_Upcoming_Movies,Get_current_movies,getMovieDetailsById}=require("../controllers/movies")
const {Create_booking}=require("../controllers/booking")
const {payment}=require("../controllers/payment")


router.route("/upc").get(Get_Upcoming_Movies)
router.route("/curr").get(Get_current_movies)
router.route("/movie/:movie_id").get(getMovieDetailsById)
router.route("/book").post(Create_booking)
router.route("/payment").post(payment)

module.exports = router