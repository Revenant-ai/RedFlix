const User=require('../models/user');

module.exports={
    user_reg:async (email,password)=>{
        const user= await User.create({
        email,
        password
        })
        return user;
    },
    user_exist: async (email)=>{
        const user= await User.findOne({
            email
        }).select('+password');
        return user;
    },
}






