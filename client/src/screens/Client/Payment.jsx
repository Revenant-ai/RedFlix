import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card'
import Invoice from '../../components/Invoice'
import ProgressBar from "@badrap/bar-of-progress"
import Net from '../../components/net'
import Upi from '../../components/upi'
import axios from 'axios'
import {loginSuccessApi } from '../../services/AuthService'
import { getBookingApi } from '../../services/BookingService'
import { paymentApi } from '../../services/PaymentService'
const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});
const Payment = () => {
  const [card, setCard] = useState(true)
  const [net, setNet] = useState(false)
  const [upi, setUpi] = useState(false)
  const[Booking,setBooking]=useState({})  
  const [isLoading, setLoading] = useState(true);
  const [Client,setClient]=useState("")
  const {booking_id}=useParams()


  useEffect(async () => {

    const res = await getBookingApi(booking_id)
    setBooking(res.data.booking) 
    const respo=await loginSuccessApi()
    setClient(respo.data.user)
    
    progress.finish()
    setLoading(false);
   
  }, [])

  if (isLoading) {
    progress.start();
    return <div></div>
  }
  const handleSubmit=async ()=>{
    console.log(Client.emails[0].value)
    
     const res=await paymentApi({
       token:"tok_visa",
       amount:Booking.amount,
       email:Client,
       booking_id:booking_id
     })
     
  }
  const handleCard = () => {
    setCard(true)
    setNet(false)
    setUpi(false)
  }
  const handleNet = () => {
    setNet(true)
    setCard(false)
    setUpi(false)
  }
  const handleUpi = () => {
    setUpi(true)
    setCard(false)
    setNet(false)
  }

  let component

  if (card) {
    component = <Card />
  }
  if (net) {
    component = <Net />
  }
  if (upi) {
    component = <Upi />
  }


  return (
    <>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <p className='text-2xl text-purple-600'>Logo</p>
          </div>
        </div>
      </nav>
      <div className='grid grid-rows-3 grid-flow-col gap-5 m-6'>
        <div className='row-span-3 col-span-5'>
          <div className='container mx-auto bg-gray-50'>
            <nav className='bg-red-500'>
              <div className='max-w-7xl mx-auto lg:px-8'>
                <div className='relative flex items-center justify-between h-12'>
                  <p className='text-2xl text-white font-bold font-mono'>
                    Payment Options
                  </p>
                </div>
              </div>
            </nav>

            <div class=" relative ">
                  <label for="required-email" class="text-gray-700">
                    Email
                    <span class="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    id="required-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    name="email"
                    placeholder="Your email"
                    value={Client.emails[0].value}
                    onChange={(e)=>setClient(e.target.value)}
                  />
                </div>

            <div className='mt-5'>
              <div className='grid grid-rows-3 grid-flow-col bg-white'>
                <div className='row-span-3 m-2'>
                  <button
                    className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent w-full rounded'
                    onClick={handleCard}
                  >
                    Credit/Debit Card
                  </button>
                </div>
                <div className='row-span-3 m-2'>
                  <button
                    className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent w-full rounded'
                    onClick={handleNet}
                  >
                    Net Banking
                  </button>
                </div>
                <div className='row-span-3 m-2'>
                  <button
                    className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent w-full rounded'
                    onClick={handleUpi}
                  >
                    UPI
                  </button>
                </div>
              </div>
              {/* Payment Options */}
              {component}
            </div>
          </div>
          <button
          className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded px-4 py-2 w-80'
          onClick={handleSubmit}
        >
          Proceed
        </button>
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
              <Invoice Booking={Booking} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment