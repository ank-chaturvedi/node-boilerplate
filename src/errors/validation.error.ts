import ApiError from "../utils/api-error";

export class ValidationError extends ApiError {
  constructor(errors: any[]) {
    super("Api Validation Error", 400, errors);
  }
}
