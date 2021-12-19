const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    booking_id:{
        type: String,
        required: true

    }, 
    movie_title:{
        type: String,
        required: [true, 'Please add a movie title']
    },
    
    email:{
        type: String,
    
    },
    transaction_id:{
        type: String,
    },
    amount:{
        type: String,
        required: [true, 'Please add a amount']
    },
    show_id:{
        type: String,
        required: [true, 'Please add a show id']
    },
    ticket_qty:{
        type: Number,
        required: [true, 'Please add a ticket quantity']
    },
    date:{
        type: String,
    },
    time:{
        type: String,
    },
    booking_status:{
        type: String,
        required: [true, 'Please add a booking status']
    },
    seats:{
        type: Array
    }
}
);
const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;

