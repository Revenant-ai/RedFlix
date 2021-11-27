const jwt=require('jsonwebtoken')
const User=require('../models/user')
const ErrorResponse=require("../utils/errorResponse")


exports.protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //Bearer token
        token=req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return next(new ErrorResponse(401,'Not authorized to access this route'))
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user=req.user=await User.findById(decoded.id)

        if(!user){
            return next(new ErrorResponse(404,'User not found with this id'))
        }

        req.user=user
        next()
    }
    catch(err){
        return next(new ErrorResponse('Not authorized to access this route',401))
    }
}

const checkUser=async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //Bearer token
        token=req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return next(new ErrorResponse(401,'Not authorized to access this route'))
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user=req.user=await User.findById(decoded.id)

        if(!user){
            return next(new ErrorResponse(404,'User not found with this id'))
        }

        let current_user=await User.findById(decoded.id)
        res.locals.user=user
        next()
    }
    catch(err){
        return next(new ErrorResponse('Not authorized to access this route',401))
    }

    
}