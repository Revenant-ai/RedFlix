class ErrorResponse extends Error{
  constructor(errorCode, errorMessage) {
    super(errorMessage)
    this.errorCode = errorCode;
  }
}

module.exports = ErrorResponse;