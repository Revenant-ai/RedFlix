export default function validateCard(values) {
    let errors = {}
  
    if (!values.name.trim()) {
      errors.name = 'Name is required'
    }
  
    if (!values.cardNumber) {
      errors.cardNumber = 'Card Number required'
    } else if (values.cardNumber.length !== 16) {
      errors.cardNumber = 'Invalid Number'
    }
  
    if (!values.date) {
      errors.date = 'Date is required'
    }
  
    if (!values.cvv) {
      errors.cvv = 'CVV is required'
    } else if (values.cvv.length !== 3) {
      errors.cvv = 'Invalid CVV'
    }
    return errors
  }