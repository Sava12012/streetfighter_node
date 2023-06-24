import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import { loginUserValid } from "../middlewares/user.validation.middleware.js";

const router = Router();
router.use(responseMiddleware);

router.post("/login", loginUserValid, (req, res, next) => {
  try {
    // TODO: Implement login action (get the user if it exists with entered credentials)
    const { email, password } = req.body; // TODO: Yurgo - middleware??
    console.log(" email, password", email, password);
    const user = authService.login({ email, password });
    res.success(user);
  } catch (err) {
    res.error(err);
  } finally {
    next();
  }
});

export { router };
