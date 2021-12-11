const Booking=require('../models/Booking');

exports.createBooking=async (ticket_qty,amount, email,booking_id,show_id)=>{
    const booking=await Booking.create({
        booking_id, email,transaction_id:"", date:"", time:"", booking_status:"waiting",show_id,amount,ticket_qty
    });
    return booking;
}

exports.addTransaction=async (booking_id,transaction_id,date)=>{
    const booking=await Booking.findOneAndUpdate({booking_id:booking_id},{transaction_id},{booking_status:"completed"});
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