import UserRepository from "../repositories/user.repository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  // Register a new user
  async registerUser(userData) {
    const { email, password } = userData;
    const userExists = await this.userRepository.getUserByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;

    return await this.userRepository.createUser(userData);
  }

  // User login
  async loginUser(email, password) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }

  // Get user by email
  async getUserByEmail(email) {
    return await this.userRepository.getUserByEmail(email);
  }
}

export default UserService;
