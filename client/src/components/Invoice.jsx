import React from 'react'

const Invoice = () => {
  return (
    <>
      <div className='grid grid-rows-3 grid-flow-col gap-5 m-6'>
        <span className='row-span-3'>
          <p className='text-gray-500 font-semibold'>
            Sooryavanshi <br /> <span className='font-normal'>Hindi 2D</span>
          </p>
        </span>
        <span className='row-span-3'>
          <p className='text-gray-500 font-semibold'>
            &nbsp;&nbsp;&nbsp;&nbsp;2 <br /> Tickets
          </p>
        </span>
      </div>
      <div className='ml-5'>
        Seat Numbers <br /> Date & Time
      </div>
      <br />
      <hr />
      <div className='grid grid-rows-3 grid-flow-col gap-5 m-6'>
        <span className='row-span-3'>
          <p className='text-gray-500 font-semibold'>Sub Total</p>
          <p className='font-light mt-3'>+ Convenience fees</p>
        </span>
        <span className='row-span-3'>
          <p className='text-gray-500 font-semibold'>Rs. 1000</p>
          <p className='font-light mt-3'>Rs. 100</p>
        </span>
      </div>
      <br />
      <nav className='bg-red-500'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-10'>
          <div className='relative flex items-center justify-between h-16'>
            <p className='text-white'>Amount Payable</p>
            <p className='font-bold text-white text-lg'>Rs. 1100</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Invoice