const { Router } = require("express")
const UserService = require("../services/userService")
const {
  createUserValid,
  updateUserValid,
} = require("../middlewares/user.validation.middleware")
const { responseMiddleware } = require("../middlewares/response.middleware")
const {
  errorHandlerMiddleware,
} = require("../middlewares/errorHadler.middleware")

const router = Router()

router.get(
  "/",
  (req, res, next) => {
    const allUsers = UserService.getAllUsers()
    res.data = allUsers
    next()
  },
  responseMiddleware
)

router.get(
  "/:id",
  (req, res, next) => {
    const id = req.params.id
    const user = UserService.getUser(id)
    res.data = user
    next()
  },
  responseMiddleware
)

router.post(
  "/",
  createUserValid,
  (req, res, next) => {
    const newUser = UserService.addUser(req.body)
    res.data = newUser
    next()
  },
  responseMiddleware
)

router.put(
  "/:id",
  updateUserValid,
  (req, res, next) => {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedUser = UserService.updateUser(id, dataToUpdate)
    const user = UserService.getUser(id)
    res.data = updatedUser
    next()
  },
  responseMiddleware
)

router.delete(
  "/:id",
  (req, res, next) => {
    const id = req.params.id
    const user = UserService.getUser(id)
    UserService.deleteUser(id)
    res.data = user
    next()
  },
  responseMiddleware
)

router.use(errorHandlerMiddleware, responseMiddleware)

module.exports = router
