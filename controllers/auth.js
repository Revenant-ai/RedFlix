const User_DAO=require('../DataAcess/auth_dao')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async(req,res,next) => {
    const{username,email,password} = req.body;
    try{
        const user=await User_DAO.user_reg(username,email,password)
        res.status(201).json({
            sucess:true,
            user:user
        })
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
        res.status(200).json({
            success:true,
            token:"ahfakfhakfh"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }


}

exports.forgotpassword = (req,res,next) => {
    res.send('forgotpassword')
}

exports.resetpassword = (req,res,next) => {
    res.send('resetpassword')
}