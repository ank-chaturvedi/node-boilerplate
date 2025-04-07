import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import http from "http";
import CONFIG from "./config";

const server = http.createServer(app);

server.listen(CONFIG.PORT, () => {
  console.log(`Server is started on port ${CONFIG.PORT}`);
});
