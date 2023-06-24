import { FIGHTER } from "../models/fighter.js";

// TODO: YurGo. the same validarors not repeated // ADD: name, id
const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const { power, defense, health } = req.body;

  // Validate power
  if (power && (isNaN(power) || power < 1 || power > 100)) {
    return res.status(400).json({ error: "Invalid power value" });
  }

  // Validate defense
  if (defense && (isNaN(defense) || defense < 1 || defense > 10)) {
    return res.status(400).json({ error: "Invalid defense value" });
  }

  // Validate health
  if (health && (isNaN(health) || health < 80 || health > 120)) {
    return res.status(400).json({ error: "Invalid health value" });
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  const { name, defense, power } = req.body;
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    return res
      .status(400)
      .json({ error: "Invalid name. Only letters are allowed." });
  } // TODO: YurGo. name - min 3 symbols???

  // Validate power
  if (power && (isNaN(power) || power < 1 || power > 100)) {
    return res.status(400).json({ error: "Invalid power value" });
  }

  // Validate defense
  if (defense && (isNaN(defense) || defense < 1 || defense > 10)) {
    return res.status(400).json({ error: "Invalid defense value" });
  }

  // TODO: YutGo: delete
  // id: "",
  //name: "",
  //health: 100,
  //power: 0,
  //defense: 1, // 1 to 10
  next();
};

export { createFighterValid, updateFighterValid };
