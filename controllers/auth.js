const crypto = require("crypto");
const User_DAO = require("../DataAcess/auth_dao");
const Theater_Admin = require("../models/Theater_Admin");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const Theater_DAO = require("../DataAcess/theater_dao");
const passport = require("passport");
const User=require("../models/Theater_Admin")


exports.register = async (req, res, next) => {
  const { email, password, theater_name, theater_address, theater_city } =
    req.body;
  try {
    const user = await User_DAO.user_reg(email, password);
    const theater = await Theater_DAO.addtheater(
      theater_name,
      theater_city,
      user._id,
      theater_address
    );
    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse(400, "Please provide email and password"));
  }

  try {
    const user = await User_DAO.user_exist(email);
    if (!user) {
      return next(new ErrorResponse(401, "Invalid credentials"));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse(404, "Invalid credentials"));
    }
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User_DAO.user_exist(email);
    if (!user) {
      return next(new ErrorResponse(404, "Email could not be sent"));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `<h1>You have requested a password reset</h1>
            <p>click this link to reset the password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;
    console.log(message);

    try {
      await sendEmail({
        to: user.email,
        subject: "Password reset token",
        text: message,
      });
      res.status(200).json({
        success: true,
        message: "Email sent",
      });
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      return next(new ErrorResponse(500, "Email could not be sent"));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse(400, "Invalid Reset Token"));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.expiresIn = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "password reset success",
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};

exports.getCurrentUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    
  ) {
    //Bearer token
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse(401, "Not authorized to access this route"));
  }
  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    const user = (req.user = await User.findById(decoded.id));
    console.log(user);

    if (!user) {
      return next(new ErrorResponse(404, "Uanuthorised"));
    }

    req.user = user;
    res.send(user);
    next();
  } catch (err) {
    return next(new ErrorResponse(401,"Not authorized to access this"));
  }
};

exports.googleLogin = async (req, res, next) => {
    if(!req.user){
        return next(new ErrorResponse(401, "Not authorized to access this route"));
    }
    else{
      res.status(200).json({
        success: true,
        data: req.user
      });
    }
}
