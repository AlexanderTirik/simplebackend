const { UserRepository } = require("../repositories/userRepository")

class UserService {
  getAllUsers() {
    return UserRepository.getAll()
  }

  addUser(user) {
    try {
      UserRepository.create(user)
    } catch (err) {
      return err
    }
  }

  getUser(id) {
    const user = UserRepository.getOne((el) => el.id === id)
    if (user) {
      return user
    } else {
      const err = {
        error: true,
        message: "User not found",
      }
      throw err
    }
  }

  isExistUser(id) {
    const user = UserRepository.getOne((el) => el.id === id)
    if (user) return true
    else return false
  }

  updateUser(id, dataToUpdate) {
    if (this.isExistUser(id)) {
      UserRepository.update(id, dataToUpdate)
    } else {
      const err = {
        error: true,
        message: "User not found",
      }
      throw err
    }
  }

  deleteUser(id) {
    if (this.isExistUser(id)) {
      UserRepository.delete(id)
    } else {
      const err = {
        error: true,
        message: "User not found",
      }
      throw err
    }
  }
}

module.exports = new UserService()
