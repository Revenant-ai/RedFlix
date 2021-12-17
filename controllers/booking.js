const crypto=require('crypto');
const booking_DAO=require('../DataAcess/booking_dao');
const show_DAO=require('../DataAcess/show_dao');

exports.Create_booking = async function(req, res, next) {
    const {movie_title,ticket_qty,seats,date,time,amount,show_id} = req.body;
    const booking_id=crypto.randomBytes(10).toString('hex');
    try{
        const booking=await booking_DAO.createBooking(movie_title,ticket_qty,seats.id,date,time,amount,booking_id,show_id);
        console.log(booking);
        show_DAO.holdSeats(show_id,seats.index);
        setTimeout(async function(){
           const booking=await booking_DAO.getBooking(booking_id)  
           if(booking.booking_status != "success"){
               show_DAO.releaseSeats(show_id,seats.index)
               const del=await booking_DAO.deleteBooking(booking_id);
            }
        },1000*60*2)

        res.status(200).json({
            message: "Booking created successfully",
            booking_id:booking_id
        });
    }
    catch(err){
        next(err);
    }
    
}

exports.getBooking = async function(req, res, next) {
    const {booking_id} = req.params;
    console.log(req.params);
    console.log(booking_id);
    try{
        const booking=await booking_DAO.getBooking(booking_id);
        res.status(200).json({
            message: "Booking found successfully",
            booking:booking
        });
    }
    catch(err){
        next(err);
    }
}