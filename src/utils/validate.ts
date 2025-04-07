import { Request, Response, NextFunction } from "express";
import { ContextRunner } from "express-validator";
import ApiError from "./api-error";
import { ValidationError } from "../errors";

const validate = (validations: ContextRunner[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) {
          throw new ValidationError(result.array());
        }
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
