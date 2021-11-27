const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    movie_id:{
        type:Number,
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
        type:Number,
        required:[true,"provide a screen"],
    },
    price:{
        type:String,
        required:[true,"provide a price"],
    },
    grid:{
        type:Array
    },
    seats:{
        type:Number,
    }
})
module.exports = mongoose.model('Show',ShowSchema);
