const crypto=require('crypto');
const booking_DAO=require('../DataAcess/booking_dao');
exports.Create_booking = async function(req, res, next) {
    const {ticket_qty,email,amount,show_id} = req.body;
    const booking_id=crypto.randomBytes(10).toString('hex');
    try{
        const booking=await booking_DAO.createBooking(ticket_qty,amount,booking_id,show_id);
        console.log(booking);
        setTimeout(async function(){
           const booking=await booking_DAO.getBooking(booking_id)  
           if(booking.status != 'success'){
               const seats=booking.seats;
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