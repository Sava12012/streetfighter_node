import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.use(responseMiddleware);
router.post("/", createUserValid, (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = userService.createUser(userData);
    res.success(newUser);
  } catch (error) {
    next(error);
  }
});

export { router };
