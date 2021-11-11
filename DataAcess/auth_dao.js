const User=require('../models/user');

module.exports={
    user_reg:async (username,email,password)=>{
        const user= await User.create({
        username,
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
    }
}





