const crypto=require('crypto')
const User_DAO=require('../DataAcess/auth_dao')
const User = require('../models/user')
const ErrorResponse = require("../utils/errorResponse")
const sendEmail = require("../utils/sendEmail")


exports.register = async(req,res,next) => {
    const{username,email,password} = req.body;
    try{
        const user=await User_DAO.user_reg(username,email,password)
        sendToken(user,201,res)
    } catch(err){
       next(err)
    }
}

exports.login = async(req,res,next) => {
    const{email, password}=req.body;

    if(!email || !password){
        return next(new ErrorResponse('Please provide email and password',400))
    }

    try{
        const user=await User_DAO.user_exist(email)
        if(!user){
            return next(new ErrorResponse(401,'Invalid credentials'))
        }
        const isMatch=await user.matchPassword(password)
        if(!isMatch){
            return next(new ErrorResponse(404,'Invalid credentials'))
        }
        sendToken(user,200,res)
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }


}

exports.forgotpassword = async(req,res,next) => {
    const {email}=req.body;

    try {
        const user=await User_DAO.user_exist(email)
        if(!user){
            return next(new ErrorResponse(404,'Email could not be sent'))
        }

        const resetToken=user.getResetPasswordToken()

        await user.save();

        const resetUrl=`http://localhost:3000/passwordreset/${resetToken}`

        const message=`<h1>You have requested a password reset</h1>
            <p>click this link to reset the password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`
            console.log(message)


        try{
            await sendEmail({
                to:user.email,
                subject:'Password reset token',
                text:message
            })
            res.status(200).json({
                success:true,
                message:'Email sent'
            })
        }catch(err){
            console.log(err)
            user.resetPasswordToken=undefined;
            user.resetPasswordExpire=undefined;
            await user.save();
            return next(new ErrorResponse(500,'Email could not be sent'))
        }
    } catch (error) {
        next(error)
    }     
}

exports.resetpassword = async(req,res,next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');

    try{
        const user=await User.findOne({
            resetPasswordToken,
            resetPasswordExpires: {$gt: Date.now()}
        })
        
        if(!user){
            return next(new ErrorResponse(400,'Invalid Reset Token'))
        }

        user.password=req.body.password;
        user.resetPasswordToken=undefined;
        user.expiresIn=undefined;

        await user.save()

        res.status(201).json({
            success:true,
            data:"password reset success"
        })
    }
    catch(err){
        next(err)
    }
}

const sendToken = (user,statusCode,res) => {
    const token = user.getSignedJwtToken()
    res.status(statusCode).json({sucess:true,token})
}