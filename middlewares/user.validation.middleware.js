import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  const { email, password, firstName, lastName, phoneNumber } = req.body;

  // console.log(res);
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

  next();
};

const updateUserValid = (req, res, next) => {
  const nameRegex = /^[a-zA-Z]+$/;
  // TODO: Implement validatior for user entity during update
  const { email, password, firstName, lastName, phoneNumber } = req.body;

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
  if (email && !gmailRegex.test(email)) {
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

export { createUserValid, updateUserValid };
