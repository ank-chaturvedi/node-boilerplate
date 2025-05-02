import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import http from "http";
import { serve } from "@hono/node-server";
import CONFIG from "./config";


serve({
  fetch: app.fetch,
  port: CONFIG.PORT,
}, (info) => {
  console.log(`Server is started on port ${info.port}`);
});
