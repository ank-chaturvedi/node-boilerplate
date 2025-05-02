import { ISuccessApiResponse } from "../types/api-response";
import { Context } from "hono";

export const ping = async (
  c: Context,
): Promise<ISuccessApiResponse> => {
  return {
    statusCode: 200,
    data: "Pong",
  };
};
