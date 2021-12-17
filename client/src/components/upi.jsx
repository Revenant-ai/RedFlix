import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import amazon from './images/amazon.webp'
import bhim from './images/bhim.webp'
import gpay from './images/gpay.webp'
import paytm from './images/paytm.webp'
import phonepe from './images/phonepe.webp'
import validate from './validation/upi'

const Upi = () => {
  const navigate = useNavigate()

  const [upi, setUpi] = useState('')

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRadio = (e) => {
    setUpi(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(upi))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/paymentdone')
    }
  })

  return (
    <div className='m-12'>
      <form onSubmit={handleSubmit}>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio'
            name='upi'
            value='amazon'
            onChange={handleRadio}
            checked={upi === 'amazon'}
          />
          <span className='ml-2'>
            <img src={amazon} alt='Amazon Pay' width='100px' />
          </span>
        </label>
        <label className='inline-flex items-center ml-24'>
          <input
            type='radio'
            className='form-radio'
            name='upi'
            value='bhim'
            onChange={handleRadio}
            checked={upi === 'bhim'}
          />
          <span className='ml-2'>
            <img src={bhim} alt='BHIM UPI' />
          </span>
        </label>
        <label className='inline-flex items-center ml-24'>
          <input
            type='radio'
            className='form-radio'
            name='upi'
            value='google'
            onChange={handleRadio}
            checked={upi === 'google'}
          />
          <span className='ml-2'>
            <img src={gpay} alt='Google Pay' />
          </span>
        </label>
        <br />
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio'
            name='upi'
            value='paytm'
            onChange={handleRadio}
            checked={upi === 'paytm'}
          />
          <span className='ml-2'>
            <img src={paytm} alt='Paytm' />
          </span>
        </label>
        <label className='inline-flex items-center ml-24'>
          <input
            type='radio'
            className='form-radio'
            name='upi'
            value='phonepe'
            onChange={handleRadio}
            checked={upi === 'phonepe'}
          />
          <span className='ml-2'>
            <img src={phonepe} alt='Phonepe' />
          </span>
        </label>
        <div className='ml-20 text-red-600'>
          {errors.upi && <li>{errors.upi}</li>}
        </div>
        <br />
        <div className='row-span-3 mt-3 float-right'>
          <button
            className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded px-4 py-2 w-80'
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  )
}

export default Upi