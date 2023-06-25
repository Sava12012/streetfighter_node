import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
  validationUserDublicate,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.use(responseMiddleware);
router.post("/", createUserValid, validationUserDublicate, (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = userService.createUser(userData);
    res.success(newUser);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res, next) => {
  try {
    const userData = userService.searchAll();
    res.success(userData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id: ", id);
    const userData = userService.search({ id });
    res.success(userData);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", updateUserValid, (req, res, next) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;

    console.log("id, dataToUpdate", id, dataToUpdate);
    const updatedUser = userService.update(id, dataToUpdate);
    res.success(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  // TODO: YurGo id validation?
  try {
    const { id } = req.params;
    const result = userService.delete(id);
    res.success(result); // TODO: YurGo return 204
  } catch (error) {
    next(error);
  }
});

export { router };
