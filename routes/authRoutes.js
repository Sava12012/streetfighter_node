import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();
router.use(responseMiddleware);

router.post("/login", (req, res, next) => {
  try {
    console.log("login route");
    // TODO: Implement login action (get the user if it exists with entered credentials)
    res.success(data);
  } catch (err) {
    res.error(err);
  } finally {
    next();
  }
});

export { router };
