import swaggerJsDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
import { swaggerUI } from '@hono/swagger-ui'
import CONFIG from "./config";
import type { Hono } from "hono";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Boilerplate",
      version: "1.0.0",
      description: "Boilerplate for Hono",
    },
    servers: [{ url: `http://localhost:${CONFIG.PORT}` }],
  },
  apis: ["./routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: Hono) => {
  app.get("/api-docs", swaggerUI(swaggerDocs));
};

export default setupSwagger;
