import { body } from "express-validator";

export const postChat = [body("url", "Must be a valid url").isURL()];
