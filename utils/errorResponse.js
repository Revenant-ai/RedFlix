class ErrorResponse {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

module.exports = ErrorResponse;