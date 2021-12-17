import React from 'react'

const Invoice = ({Booking}) => {
    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-5 m-6">
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">
            {Booking.movie_title}
           
          </p>
        </span>
        <span className="row-span-3">
          <p className="text-gray-500 font-semibold">
            &nbsp;&nbsp;&nbsp;&nbsp;{Booking.ticket_qty} <br /> Tickets
          </p>
        </span>
      </div>
      <div className="ml-5 flex flex-row gap-2">
        Details:- <br /> 
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-5 m-6">
      <span className="row-span-3">
          <p className="ml-5 text-gray-500 font-semibold">Seats:</p>
          <p className="ml-5 text-gray-500 font-semibold mt-3">Date:</p>
          <p className="ml-5 text-gray-500 font-semibold mt-3">Time:</p>
        </span>
         <span className="row-span-3">
         <p className="text-gray-500 font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;
         {
          Booking.seats.map(
            (seat,index)=>{
              console.log(seat)
              
              return <text>{seat} </text>
            }
          )
        }</p>
          <p className="text-gray-500 font-semibold mt-3">&nbsp;&nbsp;&nbsp;&nbsp;{Booking.date.split("T")[0]}</p>
          <p className="text-gray-500 font-semibold mt-3">&nbsp;&nbsp;&nbsp;&nbsp;{(Booking.time )}</p>
        </span>
        </div>
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
    )
}

export default Invoice
