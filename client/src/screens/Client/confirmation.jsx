import React from 'react'
import { useNavigate } from 'react-router-dom'
import Invoice from '../../components/Invoice'


const ConfirmTicket = () => {
  const navigate = useNavigate()

  return (
    <>
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
              <Invoice />
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
    </>
  )
}

export default ConfirmTicket