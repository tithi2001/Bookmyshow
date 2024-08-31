import { User } from "../models/user.model.js";

class UserRepository {
  // Get a user by email
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  // Create a new user
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  // Get a user by ID
  async getUserById(userId) {
    return await User.findById(userId);
  }

  // Update a user by ID
  async updateUser(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  // Delete a user by ID
  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

export default UserRepository;
