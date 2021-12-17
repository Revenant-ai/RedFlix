const Booking=require('../models/Booking');

exports.createBooking=async (movie_title,ticket_qty,seats,date,time,amount,booking_id,show_id)=>{
    const booking=await Booking.create({
        movie_title,booking_id, email:"",transaction_id:"", date:date, time:time, booking_status:"waiting",show_id,amount,ticket_qty,seats
    });
    return booking;
}

exports.addTransaction=async (booking_id,transaction_id,email)=>{
    console.log(booking_id,transaction_id,email);
    const booking=Booking.findByIdAndUpdate(booking_id,{$set:{transaction_id:transaction_id,email:email,booking_status:"success"}},{new:true});
    return booking;
}

exports.getBooking=async (booking_id)=>{
    const booking=await Booking.findOne({booking_id:booking_id});
    return booking;
}
exports.deleteBooking=async (booking_id)=>{
    const booking=await Booking.findOneAndDelete({booking_id:booking_id});
    return booking;
}