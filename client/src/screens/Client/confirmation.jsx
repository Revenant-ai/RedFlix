import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import ProgressBar from "@badrap/bar-of-progress"
import Invoice  from "../../components/Invoice"
import logo from "../../components/images/logo.png"
import { loginSuccessApi} from "../../services/AuthService"
import { getBookingApi } from "../../services/BookingService"
import {payment, paymentSuccessApi} from "../../services/PaymentService"



const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});

const ConfirmTicket = () => {
  const navigate = useNavigate()
  const {booking_id} = useParams()
  const[Booking,setBooking]=useState({})  
  const [isLoading, setLoading] = useState(true);
  const [Client,setClient]=useState("")





  function loadScript(src){

    return new Promise(resolve => {
      const script = document.createElement("script");
    script.src =src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script);
    })
  }




  useEffect(async () => {
    // const config = {
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const respo = await loginSuccessApi();
    setClient(respo.data.user);
    const res = await getBookingApi(booking_id);
    setBooking(res.data.booking);
    progress.finish()
    setLoading(false);
  }, [])

  if (isLoading) {
    progress.start();
    return <div></div>
  }

  async function displayRazorpay(){

    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("Failed to load Razorpay")
      return
    }

    const data=await payment({
        amount:Booking.amount,
        booking_id:Booking._id,
        email:Client.emails[0].value  
      }
    )

   
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, 
      amount: data.data.amount, 
      currency: data.data.currency,
      name: "Redflix",
      description: "Thank you for booking with us",
      image: logo,
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response){
        paymentSuccessApi({
          booking_id:Booking._id,
          transaction_id:response.razorpay_payment_id,
          email:Client.emails[0].value
      }).then(navigate("/"))
      
    },

      prefill: {
          name: "Aaryan",
          email: Client.emails[0].value,
      },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  }

  return (
    
    <div>
      {console.log(Booking)}
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <p className='font-extrabold text-red-600 text-4xl'>Sooryavanshi</p>
          </div>
        </div>
      </nav>
      <div className='grid grid-rows-3 grid-flow-col gap-5 m-6'>
        <div className='row-span-3 col-span-3'>
          <div className='container mx-auto bg-gray-50'>
            <nav className='bg-gray-50'>
              <div className='mt-2 ml-10'>
                <img  alt='Cinema' />
              </div>
            </nav>
          </div>
        </div>
        <div className='row-span-3'>
          <div className='container mx-auto bg-gray-50'>
            <nav className='bg-red-500'>
              <div className='max-w-7xl mx-auto lg:px-8'>
                <div className='relative flex items-center justify-between h-12'>
                  <p className='text-2xl text-white font-bold font-mono'>
                    Ticket Invoice
                  </p>
                </div>
              </div>
            </nav>
            <div className='m-5'>
            <div>
              <Invoice Booking={Booking}/>
          </div>
            </div>
          </div>
          <div className='m-3'>
            <div className='ml-5 font-extralight text-gray-800 text-xs'>
              By proceeding, I express my consent to complete this transaction
            </div>
            <div className='row-span-3 mt-3'>
              <button
                className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-200 rounded px-4 py-2 w-full'
                onClick={displayRazorpay}
              >
                Proceed
              </button>
            </div>
            <br />
            <div className='ml-5 font-normal text-gray-400 text-xs'>
              You can cancel the tickets before the show. <br />
              Refunds will be done according to
              <span className='text-red-600'> Cancellation Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmTicket