import { sendSuccessApiResponse } from "./api-response";

const asyncResponseHandler = (fun) => {
  return (req, res, next) => {
    Promise.resolve(fun(req, res))
      .then((result) => {
        return sendSuccessApiResponse(res, result);
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  };
};

export default asyncResponseHandler;
