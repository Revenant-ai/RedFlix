const express = require('express')
const router = express.Router()
const passport = require('passport')



const{ register, login, forgotpassword, resetpassword,getCurrentUser,googleLogin}= require('../controllers/auth');

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)

router.route("/getCurrentUser").get(getCurrentUser)

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


module.exports = router