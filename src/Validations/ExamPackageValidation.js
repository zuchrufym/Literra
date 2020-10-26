const ExamPackageValidation = (values) => {
    const errors = {}
  
    if (!values.name || values.name === '') {
      errors.name = 'can not be empty'
    }
  
    return errors
  }
  
  export default ExamPackageValidation