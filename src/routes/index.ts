import express from "express";
import testRoutes from "./test";

const routes = express.Router();

routes.use(testRoutes);

export default routes;
