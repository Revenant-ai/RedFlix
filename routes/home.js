const express = require('express')
const router = express.Router()

const {GetMovies}=require("../controllers/movies")

router.route("/").get(GetMovies)

module.exports = router