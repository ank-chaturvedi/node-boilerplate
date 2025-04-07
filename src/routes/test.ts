import express from "express";
import asyncResponseHandler from "../utils/async-handler";
import { ping } from "../controllers/test.controller";

const router = express.Router();

router.get("/ping", asyncResponseHandler(ping));

export default router;