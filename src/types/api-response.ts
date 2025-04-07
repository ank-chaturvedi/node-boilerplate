export interface ISuccessApiResponse {
  statusCode: number;
  message?: string;
  data?: any;
  prettyPrint?: boolean;
}

export interface IErrorApiResponse {
  statusCode: number;
  message: string;
  errors?: any;
}
