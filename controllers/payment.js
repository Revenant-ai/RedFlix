const Stripe=require('stripe');
const stripe=new Stripe(process.env.STRIPE);
const booking_DAO=require('../DataAcess/booking_dao');

exports.payment=async(req,res)=>{

    const {token,amount,email,booking_id}=req.body;
    stripe.customers.create({
        email:email,
        source:token,
        name:'RedFlix',
        description:'Payment for RedFlix'
    }).then(customer=>stripe.charges.create({
        amount:amount,
        description:'Tickets',
        currency:'inr',
        customer:customer.id
    })).then(charge=>{
        console.log(charge.id);
        booking_DAO.addTransaction(booking_id,charge.id);
    }).then(res.send("sucess")).catch(err=>console.log(err));
}