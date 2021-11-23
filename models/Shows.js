const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    movie:{
        type:String,
        required:[true,"provide a movie"],
    },
    theater_id:{
        type:String,
        required:[true,"provide a theatre"],
    },
    date:{
        type:String,
        required:[true,"provide a date"],
    },
    time:{
        type:String,
        required:[true,"provide a time"],
    },
    screen:{
        type:String,
        required:[true,"provide a screen"],
    },
    price:{
        type:String,
        required:[true,"provide a price"],
    },
    available_seats:{
        type:Number,
    }
    
})
module.exports = mongoose.model('Show',ShowSchema);