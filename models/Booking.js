const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    booking_id:{
        type: String,
        required: true
    }, 
    movie_title:{
        type: String,
        required: true
    },
    
    email:{
        type: String,
    
    },
    transaction_id:{
        type: String,
    },
    amount:{
        type: String,
        required: true
    },
    show_id:{
        type: String,
        required: true
    },
    ticket_qty:{
        type: Number,
        required: true
    },
    date:{
        type: String,
    },
    time:{
        type: String,
    },
    booking_status:{
        type: String,
        required: true
    },
    seats:{
        type: Array
    }
}
);
const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;

