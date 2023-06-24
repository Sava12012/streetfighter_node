import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  createUser(userData) {
    const newUser = userRepository.create(userData);
    return newUser;
  }

  searchAll() {
    const item = userRepository.getAll();
    if (!item) {
      return null;
    }
    return item;
  }

  searchOne(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
