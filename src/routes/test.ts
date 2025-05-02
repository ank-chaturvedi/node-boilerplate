import { Hono } from "hono";
import asyncResponseHandler from "../utils/async-handler";
import { ping } from "../controllers/test.controller";

const router = new Hono();

router.get("/ping", asyncResponseHandler(ping));

export default router;