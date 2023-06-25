import { USER } from "../models/user.js";
import { userRepository } from "../repositories/userRepository.js";

const createUserValid = (req, res, next) => {
  const { email, password, firstName, lastName, phoneNumber, id } = req.body;

  if (id) {
    return res.status(400).json({ error: "id cannot be in body." });
  }

  // Дозволені властивості
  const allowedProperties = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "password",
  ];

  // Перевірка на наявність недозволених властивостей
  const invalidProperties = Object.keys(req.body).filter(
    (property) => !allowedProperties.includes(property)
  );

  if (invalidProperties.length > 0) {
    return res.status(400).json({ error: "only requred filds allowed" });
  }

  // TODO: Implement validatior for USER entity during creation
  // Валідація полів firstName та lastName
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(firstName)) {
    return res
      .status(400)
      .json({ error: "Invalid firstName. Only letters are allowed." });
  }
  if (!nameRegex.test(lastName)) {
    return res
      .status(400)
      .json({ error: "Invalid lastName. Only letters are allowed." });
  }
  // Валідація електронної адреси (лише Gmail)
  const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
  if (!gmailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Invalid email. Only Gmail addresses are allowed." });
  }
  // Валідація номеру телефону
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      error:
        "Invalid phone number. Phone number should be in the format +380xxxxxxxxx.",
    });
  }

  // Валідація поля password
  if (password.length < 3) {
    return res.status(400).json({
      error:
        "Invalid password. Password should have a minimum length of 3 characters.",
    });
  }

  req.body.email = email.toLowerCase();

  next();
};

const updateUserValid = (req, res, next) => {
  const nameRegex = /^[a-zA-Z]+$/;
  // TODO: Implement validatior for user entity during update
  const { email, password, firstName, lastName, phoneNumber, id } = req.body;

  if (id) {
    return res.status(400).json({ error: "id cannot be changed." });
  }

  // Дозволені властивості
  const allowedProperties = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "password",
  ];

  // Перевірка на наявність недозволених властивостей
  const invalidProperties = Object.keys(req.body).filter(
    (property) => !allowedProperties.includes(property)
  );

  if (invalidProperties.length > 0) {
    return res.status(400).json({ error: "only requred filds allowed" });
  }

  if (!email && !password && !firstName && !lastName && !phoneNumber) {
    return res
      .status(400)
      .json({ error: "At least one field should be present for update." });
  }

  // Валідація полів firstName та lastName
  if (firstName && !nameRegex.test(firstName)) {
    return res
      .status(400)
      .json({ error: "Invalid firstName. Only letters are allowed." });
  }
  if (lastName && !nameRegex.test(lastName)) {
    return res
      .status(400)
      .json({ error: "Invalid lastName. Only letters are allowed." });
  }

  // Валідація електронної адреси
  const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
  if (email && !gmailRegex.test(email.toLowerCase())) {
    return res
      .status(400)
      .json({ error: "Invalid email. Only Gmail addresses are allowed." });
  }

  // Валідація номеру телефону
  const phoneRegex = /^\+380\d{9}$/;
  if (phoneNumber && !phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      error:
        "Invalid phone number. Phone number should be in the format +380xxxxxxxxx.",
    });
  }

  // Валідація поля password
  if (password && password.length < 3) {
    return res.status(400).json({
      error:
        "Invalid password. Password should have a minimum length of 3 characters.",
    });
  }

  next();
};

const loginUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { email, password } = req.body;

  // Дозволені властивості
  const allowedProperties = ["email", "password"];

  // Перевірка на наявність недозволених властивостей
  const invalidProperties = Object.keys(req.body).filter(
    (property) => !allowedProperties.includes(property)
  );

  if (invalidProperties.length > 0) {
    return res.status(400).json({ error: "only requred filds allowed" });
  }

  // Валідація електронної адреси
  const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
  if (email && !gmailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Invalid email. Only Gmail addresses are allowed." });
  }

  // Валідація поля password
  if (password && password.length < 3) {
    return res.status(400).json({
      error:
        "Invalid password. Password should have a minimum length of 3 characters.",
    });
  }

  next();
};

const validationUserDublicate = (req, res, next) => {
  const { email, phoneNumber } = req.body;

  const isUserExistEmail = userRepository.getOne({ email });
  const isUserExistPhone = userRepository.getOne({ phoneNumber });
  if (isUserExistEmail) {
    return res.status(400).json({
      error: "Sorry, the user with same email is already exist",
    });
  }
  if (isUserExistPhone) {
    return res.status(400).json({
      error: "Sorry, the user with same phone is already exist",
    });
  }

  next();
};

export {
  createUserValid,
  updateUserValid,
  loginUserValid,
  validationUserDublicate,
};
