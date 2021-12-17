import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from './images/card.jpeg'
import validate from "./validation/card"

const Card = () => {
  // const minDate = new Date().toISOString().slice(0, 10)
  const today = new Date()
  const minDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const navigate = useNavigate()

  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '20px',
    width: '400px',
    height: '250px',
  }

  const [values, setValues] = useState({
    name: '',
    cardNumber: '',
    date: '',
    cvv: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/paymentdone')
    }
  })

  return (
    <div className='bg-grey-50'>
      <div style={myStyle} className='row-span-3 col-span-4 mt-5 pl-8 ml-16'>
        <form className='w-full max-w-xs'>
          <div className='flex items-center border-b border-teal-500 py-2 pt-3'>
            <input
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-3 leading-tight focus:outline-none'
              type='text'
              placeholder='Name on card'
              value={values.name}
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center border-b border-teal-500 py-2 pt-5'>
            <input
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-3 leading-tight focus:outline-none'
              type='tel'
              placeholder='XXXX XXXX XXXX XXXX'
              // maxLength='16'
              autoComplete='cc-number'
              // pattern='[0-9\s]{13,19}'
              value={values.cardNumber}
              name='cardNumber'
              onChange={handleChange}
              inputMode='numeric'
            />
          </div>
          <div className='flex items-center border-b border-teal-500 py-2  pt-5'>
            <input
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-3 leading-tight focus:outline-none'
              type='date'
              min={minDate}
              value={values.date}
              name='date'
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center border-b border-teal-500 py-2  pt-5'>
            <input
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-3 leading-tight focus:outline-none'
              type='password'
              placeholder='CVV'
              // maxLength='3'
              value={values.cvv}
              name='cvv'
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className='ml-20 text-red-600'>
        {errors.name && <li>{errors.name}</li>}
        {errors.cardNumber && <li>{errors.cardNumber}</li>}
        {errors.date && <li>{errors.date}</li>}
        {errors.cvv && <li>{errors.cvv}</li>}
      </div>
      <div className='row-span-3 mt-3 float-right'>
        
      </div>
    </div>
  )
}

export default Card