import { NextFunction, Request, Response } from "express";
import { ISuccessApiResponse } from "../types/api-response";

export const ping = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<ISuccessApiResponse> => {
  const { prettyPrint } = req.query;
  
  return {
    statusCode: 200,
    data: "Pong",
    prettyPrint: prettyPrint === "true",
  };
};
