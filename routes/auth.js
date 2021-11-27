const express = require('express')
const router = express.Router()

const{ register, login, forgotpassword, resetpassword,getCurrentUser }= require('../controllers/auth');

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)

router.route("/getCurrentUser").get(getCurrentUser)

module.exports = router