import { Response } from "express";

import { IErrorApiResponse, ISuccessApiResponse } from "../types/api-response";
import { Context } from "hono";

export const sendSuccessApiResponse = (
  c: Context,
  successResponse: ISuccessApiResponse,
) => {
  c.set("status", successResponse.statusCode);
  return c.json({
    success: true,
    message: successResponse.message,
    data: successResponse.data,
  });
};

export const sendErrorApiResponse = (
  c: Context,
  errorResponse: IErrorApiResponse,
) => {
  c.set("status", errorResponse.statusCode);
  return c.json({
    success: false,
    message: errorResponse.message,
    errors: errorResponse.errors,
  });
};
