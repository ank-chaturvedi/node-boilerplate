import { Context } from "hono";
import { sendSuccessApiResponse } from "./api-response";

const asyncResponseHandler = (fun: (c: Context, next) => Promise<any>) => {
  return async (c: Context, next) => {
    try {
      const result = await fun(c, next);
      return sendSuccessApiResponse(c, result);
    } catch (error) {
      console.error(error);
      return await next(error);
    }
  };
};

export default asyncResponseHandler;
