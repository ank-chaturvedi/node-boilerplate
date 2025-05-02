import { Hono } from "hono";

import setupSwagger from "./swagger";
import logger from "./utils/logger";
import ApiError from "./utils/api-error";
import { sendErrorApiResponse } from "./utils/api-response";
import routes from "./routes";

// const app = express();
const app = new Hono();
// app.use(json()); // no need to use json middleware as we are using hono
//Setting up Swagger
setupSwagger(app);

app.route("/api/v1", routes);

app.onError((error, c) => {
  logger.error(error);
  console.log(error);
  let apiError: ApiError;
  if (!(error instanceof ApiError)) {
    apiError = new ApiError("Some unwanted error occurred", 500);
  } else {
    apiError = error;
  }
  return sendErrorApiResponse(c, {
    statusCode: apiError.statusCode,
    message: apiError.message,
    errors: apiError.errors,
  });
});
export default app;
