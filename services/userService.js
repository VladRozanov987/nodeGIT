import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  create(data) {
    const { email, phoneNumber } = data;
    const userExists =
      this.search({ email: email }) ||
      this.search({ phoneNumber: phoneNumber });
    if (userExists) {
      throw new Error("This email or phone number exists!");
    }
    const newUser = userRepository.create(data);
    if (!newUser) {
      throw new Error("Can't create user!");
    }
    return newUser;
  }

  getUsers() {
    const users = userRepository.getAll();
    if (!users) {
      throw new Error("There is no users");
    }
    return users;
  }
}

const userService = new UserService();

export { userService };
