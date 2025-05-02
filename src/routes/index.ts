import testRoutes from "./test";
import { Hono } from "hono";

const routes = new Hono();

routes.route("/test", testRoutes);

export default routes;
