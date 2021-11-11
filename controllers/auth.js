const User=require('../models/user')
const User_DAO=require('../DataAcess/auth_dao')

exports.register = async(req,res,next) => {
    const{username,email,password} = req.body;
    try{
        const user=await User_DAO.user_reg(username,email,password)
        res.status(201).json({
            sucess:true,
            user:user
        })
    } catch(err){
        res.status(500).json({
            suceess:false,
            err:err.message
        })
    }
}

exports.login = async(req,res,next) => {
    const{email, password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            error:"Please enter all fields"
        })
    }

    try{
        const user=await User_DAO.user_exist(email)
        if(!user){
            return res.status(404).json({
                success:false,
                error:"Invalid credentials"
            })
        }
        const isMatch=await user.matchPassword(password)
        if(!isMatch){
                res.status(404).json({
                success:false,
                error:"Invalid credentials"
            })
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