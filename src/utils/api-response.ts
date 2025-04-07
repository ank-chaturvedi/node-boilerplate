import { Response } from "express";

import { IErrorApiResponse, ISuccessApiResponse } from "../types/api-response";

export const sendSuccessApiResponse = (
  res: Response,
  successResponse: ISuccessApiResponse,
) => {
  const prettyPrint = successResponse.prettyPrint;
  const response = {
    success: true,
    message: successResponse.message,
    data: successResponse.data,
  };
  
  if (prettyPrint) {
    res.setHeader('Content-Type', 'application/json');
    res.status(successResponse.statusCode).send(JSON.stringify(response, null, 2));
  } else {
    res.status(successResponse.statusCode).json(response);
  }
};

export const sendErrorApiResponse = (
  res: Response,
  errorResponse: IErrorApiResponse,
) => {
  res.status(errorResponse.statusCode).json({
    success: false,
    message: errorResponse.message,
    errors: errorResponse.errors,
  });
};
