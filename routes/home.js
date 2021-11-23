const express = require('express')
const router = express.Router()

const {Get_Upcoming_Movies,Get_current_movies}=require("../controllers/movies")

router.route("/upc").get(Get_Upcoming_Movies)
router.route("/curr").get(Get_current_movies)

module.exports = router