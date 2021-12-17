const express = require('express')
const router = express.Router()

const {Get_Upcoming_Movies,Get_current_movies,getMovieDetailsById,Get_all_Movies,getShows}=require("../controllers/movies")
const {Create_booking,getBooking}=require("../controllers/booking")
const {payment,payment_success}=require("../controllers/payment")
const {getShowByID,hold_seats}=require("../controllers/Client")


router.route("/upc").get(Get_Upcoming_Movies)
router.route("/curr").get(Get_current_movies)
router.route("/movie/:movie_id").get(getMovieDetailsById)
router.route("/book").post(Create_booking)
router.route("/payment").post(payment)
router.route("/payment/success").post(payment_success)
router.route("/all-movie").get(Get_all_Movies)
router.route("/shows/movie/:movie_id").get(getShows)
router.route("/show/:show_id").get(getShowByID)
router.route("/hold").post(hold_seats)
router.route("/getbooking/:booking_id").get(getBooking)


module.exports = router