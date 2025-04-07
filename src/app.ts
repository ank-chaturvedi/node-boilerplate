import express, { json } from "express";
import morgan from "morgan";

import setupSwagger from "./swagger";
import logger from "./utils/logger";
import ApiError from "./utils/api-error";
import { sendErrorApiResponse } from "./utils/api-response";
import routes from "./routes";

const app = express();

app.use(json());
//Setting up Swagger
setupSwagger(app);

// Logging APIs Information using Morgan
const morganFormat = ":method :url :status :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

app.use("/api/v1", routes);

app.use((error, req, res, next) => {
  logger.error(error);
  console.log(error);
  let apiError: ApiError;
  if (!(error instanceof ApiError)) {
    apiError = new ApiError("Some unwanted error occurred", 500);
  } else {
    apiError = error;
  }
  sendErrorApiResponse(res, {
    statusCode: apiError.statusCode,
    message: apiError.message,
    errors: apiError.errors,
  });
});
export default app;
