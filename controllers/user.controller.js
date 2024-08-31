import UserService from "../services/user.service.js";

class UsersController {
  constructor() {
    this.userService = new UserService();
  }

  // Register a new user
  async registerUser(req, res) {
    try {
      const userData = req.body;
      const user = await this.userService.registerUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // User login
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const token = await this.userService.loginUser(email, password);
      res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Get user by email
  async getUserByEmail(req, res) {
    try {
      const email = req.params.email;
      const user = await this.userService.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }
}

export default new UsersController();
