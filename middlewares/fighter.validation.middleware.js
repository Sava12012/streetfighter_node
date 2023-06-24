import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation

  // // Валідація поля power
  // if (power < 1 || power > 100) {
  //   return res.status(400).json({
  //     error: "Invalid power. Power should be a number between 1 and 100.",
  //   });
  // }

  // // Валідація поля defense
  // if (defense < 1 || defense > 10) {
  //   return res.status(400).json({
  //     error: "Invalid defense. Defense should be a number between 1 and 10.",
  //   });
  // }

  // // Валідація поля health (необов'язкове поле)
  // if (health && (health < 80 || health > 120)) {
  //   return res.status(400).json({
  //     error: "Invalid health. Health should be a number between 80 and 120.",
  //   });
  // }

  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
