import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import CONFIG from "./config";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "SnipSync",
      version: "1.0.0",
      description: "💇💇‍♀️",
    },
    servers: [{ url: `http://localhost:${CONFIG.PORT}` }],
  },
  apis: ["./routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
