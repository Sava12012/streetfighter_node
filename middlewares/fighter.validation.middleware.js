import { FIGHTER } from "../models/fighter.js";
import { fighterRepository } from "../repositories/fighterRepository.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const { name, power, defense, health, id } = req.body;

  if (id) {
    return res.status(400).json({ error: "id cannot be in body." });
  }

  // Дозволені властивості
  const allowedProperties = ["name", "power", "defense", "health"];

  // Перевірка на наявність недозволених властивостей
  const invalidProperties = Object.keys(req.body).filter(
    (property) => !allowedProperties.includes(property)
  );

  if (invalidProperties.length > 0) {
    return res.status(400).json({ error: "only requred filds allowed" });
  }

  if (!name || !power || !defense) {
    return res.status(400).json({ error: "the field is not filled" });
  }

  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    return res
      .status(400)
      .json({ error: "Invalid name. Only letters are allowed." });
  }

  if (power && (isNaN(power) || power < 1 || power > 100)) {
    return res.status(400).json({ error: "Invalid power value" });
  }

  if (defense && (isNaN(defense) || defense < 1 || defense > 10)) {
    return res.status(400).json({ error: "Invalid defense value" });
  }

  if (health && (isNaN(health) || health < 80 || health > 120)) {
    return res.status(400).json({ error: "Invalid health value" });
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  const { name, defense, power, id } = req.body;

  if (id) {
    return res.status(400).json({ error: "id cannot be changed." });
  }

  // Дозволені властивості
  const allowedProperties = ["name", "power", "defense"];

  // Перевірка на наявність недозволених властивостей
  const invalidProperties = Object.keys(req.body).filter(
    (property) => !allowedProperties.includes(property)
  );

  if (invalidProperties.length > 0) {
    return res.status(400).json({ error: "only requred filds allowed" });
  }

  if (!name && !defense && !power) {
    return res
      .status(400)
      .json({ error: "At least one field should be present for update." });
  }

  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    return res
      .status(400)
      .json({ error: "Invalid name. Only letters are allowed." });
  }

  // Validate power
  if (power && (isNaN(power) || power < 1 || power > 100)) {
    return res.status(400).json({ error: "Invalid power value" });
  }

  // Validate defense
  if (defense && (isNaN(defense) || defense < 1 || defense > 10)) {
    return res.status(400).json({ error: "Invalid defense value" });
  }

  next();
};

const validationFighterDublicate = (req, res, next) => {
  const { name } = req.body;

  const isUserExistName = fighterRepository.getOne({ name });
  if (isUserExistName) {
    return res.status(400).json({
      error: "Sorry, the user with same name is already exist",
    });
  }

  next();
};

export { createFighterValid, updateFighterValid, validationFighterDublicate };
