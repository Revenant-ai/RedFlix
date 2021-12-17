export default function validateNetupiing(upi) {
    let errors = {}
  
    if (!upi) {
      errors.upi = 'You have to choose one of the UPI'
    }
  
    return errors
  }