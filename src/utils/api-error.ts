class ApiError extends Error {
  errors: any[];
  stack: string;
  message: string;
  statusCode: number;

  constructor(
    message = "Something Went Wrong...!",
    statusCode: number,
    errors = [],
    stack = "",
  ) {
    super(message);
    this.message = message;
    this.errors = errors;
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {};
  }
}

export default ApiError;
