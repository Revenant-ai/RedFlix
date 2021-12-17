import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axis from './images/axis.webp'
import hdfc from './images/hdfc.webp'
import icici from './images/icici.webp'
import sbi from './images/sbi.webp'
import validate from './validation/net'

const Net = () => {
  const navigate = useNavigate()

  const [bank, setBank] = useState('')

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRadio = (e) => {
    setBank(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(bank))
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
            name='bank'
            value='axis'
            onChange={handleRadio}
            checked={bank === 'axis'}
          />
          <span className='ml-2'>
            <img src={axis} alt='Axis Bank' />
          </span>
        </label>
        <label className='inline-flex items-center ml-24'>
          <input
            type='radio'
            className='form-radio'
            name='bank'
            value='hdfc'
            onChange={handleRadio}
            checked={bank === 'hdfc'}
          />
          <span className='ml-2'>
            <img src={hdfc} alt='HDFC Bank' />
          </span>
        </label>
        <br />
        <br />
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio'
            name='bank'
            value='icici'
            onChange={handleRadio}
            checked={bank === 'icici'}
          />
          <span className='ml-2'>
            <img src={icici} alt='ICICI Bank' />
          </span>
        </label>
        <label className='inline-flex items-center ml-24'>
          <input
            type='radio'
            className='form-radio'
            name='bank'
            value='sbi'
            onChange={handleRadio}
            checked={bank === 'sbi'}
          />
          <span className='ml-2'>
            <img src={sbi} alt='SBI Bank' />
          </span>
        </label>
        <br />
        <br />
      </form>
      <div className='ml-20 text-red-600'>
        {errors.bank && <li>{errors.bank}</li>}
      </div>
      <div className='row-span-3 mt-3 float-right'>
        <button
          className='border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded px-4 py-2 w-80'
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </div>
  )
}

export default Net