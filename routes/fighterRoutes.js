import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();
// TODO: Implement route controllers for fighter
router.use(responseMiddleware);
router.post("/", createFighterValid, (req, res, next) => {
  try {
    const fighterData = req.body;
    const newFighter = fighterService.createFighter(fighterData);
    res.success(newFighter);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res, next) => {
  try {
    const fightersData = fighterService.searchAll();
    res.success(fightersData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id: ", id);
    const fightersData = fighterService.searchOne({ id });
    res.success(fightersData);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", updateFighterValid, (req, res, next) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;

    const updatedFighter = fighterService.update(id, dataToUpdate);
    res.success(updatedFighter);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  // TODO: YurGo id validation?
  try {
    const { id } = req.params;

    console.log("id fighter to delete", id);
    const result = fighterService.delete(id);
    res.success(result); // TODO: YurGo return 204
  } catch (error) {
    next(error);
  }
});

export { router };
