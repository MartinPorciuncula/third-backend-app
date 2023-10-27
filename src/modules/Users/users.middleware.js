import { envs } from "../config/enviroments/enviroments.js";
import { AppError } from "../errors/appError.js";
import { catchAsync } from "../errors/index.js";
import { UserServices } from "./users_service.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export const ValidateExistingUser = async (req, res, next) => {
    const { id } = req.params;
  
    const user = await UserServices.findOneById(id);
  
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User whit id ${id} not found`,
      });
    }
  
    req.user = user;

    next();
};