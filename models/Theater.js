const mongoose=require('mongoose')

const TheaterSchema = new mongoose.Schema({
    theater_name:{
        type:String,
        required:[true,"provide a theater name"],
    },
    theater_address:{
        type:String,
        required:[true,"provide a theater address"],
    },
    theater_city:{
        type:String,
        required:[true,"provide a theater city"],
    },
    screens:{
        type:Object,
    },
    theater_id:{
        type:String,
        required:[true,"provide a theater id"],
    }

})

    
module.exports=mongoose.model('Theater',TheaterSchema)
