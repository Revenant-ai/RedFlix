const booking_DAO=require('../DataAcess/booking_dao');
const Razorpay=require('razorpay');
const crypto=require('crypto');
const sendEmail = require("../utils/sendEmail");

var razorpay=new Razorpay({
    key_id:process.env.REACT_APP_RAZORPAY_KEY,
    key_secret:process.env.razorpay_secret
});

exports.payment=async(req,res)=>{
    const {amount,email,booking_id}=req.body;

    const options={
        amount: amount*100,
        currency: 'INR',
        receipt: crypto.randomBytes(10).toString('hex'),
        payment_capture: 1
    }
    console.log("here")
      const response=await razorpay.orders.create(options)
      res.send({id: response.id,amount:response.amount, booking_id:booking_id, currency:response.currency, email:email});   
}

exports.payment_success=async(req,res)=>{

    const {booking_id,transaction_id,email}=req.body;
    const book=await booking_DAO.addTransaction(booking_id,transaction_id,email);
    const message = `<h1>These are your ticekts</h1>
            <p>Movie:${book.movie_title}</p>
            <p>Seat:${book.seats}</p>
            <p>Amount:${book.amount}</p>
            <p>Date:${book.date}</p>
            <p>Time:${book.time}</p>
            <p>Thank you for booking with us</p>`;
            await sendEmail({
                to: book.email,
                subject: "Movie Tickets",
                text: message,
              });
    res.status(200).send(book);
}
