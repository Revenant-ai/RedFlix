const User=require('../models/user')
const User_DAO=require('../DataAcess/auth_dao')

exports.register = async(req,res,next) => {
    const{username,email,password} = req.body;
    try{
        const user=await User_DAO.user_reg(username,email,password)
        console.log(user)
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

exports.login = (req,res,next) => {
    res.send('login')
}

exports.forgotpassword = (req,res,next) => {
    res.send('forgotpassword')
}

exports.resetpassword = (req,res,next) => {
    res.send('resetpassword')
}