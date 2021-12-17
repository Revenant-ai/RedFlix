export default function validateNetbanking(bank) {
    let errors = {}
  
    if (!bank) {
      errors.bank = 'You have to choose one of the Bank'
    }
  
    return errors
  }