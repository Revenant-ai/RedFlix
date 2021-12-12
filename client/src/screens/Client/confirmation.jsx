import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Invoice from '../../components/Invoice'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import ProgressBar from "@badrap/bar-of-progress"


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

  useEffect(async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`/api/home/getbooking/${booking_id}`, config)
    setBooking(res.data.booking) 
    progress.finish()
    setLoading(false);
   
  }, [])

  if (isLoading) {
    progress.start();
    return <div></div>
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
      <div className="grid grid-rows-3 grid-flow-col gap-5 m-6">
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">
            {Booking.movie_title}
            <br /> <span className="font-normal">Hindi 2D</span>
          </p>
        </span>
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">
            &nbsp;&nbsp;&nbsp;&nbsp;{Booking.ticket_qty} <br /> Tickets
          </p>
        </span>
      </div>
      <div className="ml-5 flex flex-row gap-2">
        {
          Booking.seats.map(
            (seat,index)=>{
              console.log(seat)
              
              return <p> {seat} </p>
            }
          )
        } <br /> 
      </div>
      <div className="ml-5">Date & Time</div>
      <br />
      <hr />
      <div className="grid grid-rows-3 grid-flow-col gap-5 m-6">
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">Sub Total</p>
          <p className="font-light mt-3">+ Convenience fees</p>
        </span>
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">₹{Booking.amount}</p>
          <p className="font-light mt-3">₹{(Booking.amount * 20)/100}</p>
        </span>
      </div>
      <br />
      <nav className="bg-red-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10">
          <div className="relative flex items-center justify-between h-16">
            <p className="text-white">Amount Payable</p>
            <p className="font-bold text-white text-lg">₹ {parseInt(Booking.amount) + ((Booking.amount * 20)/100)}</p>
          </div>
        </div>
      </nav>
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
                onClick={() => navigate('/payment')}
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