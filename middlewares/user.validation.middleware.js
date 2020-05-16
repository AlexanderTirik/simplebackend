const { createValidate } = require("../util/createValidate")
const { updateValidate } = require("../util/updateValidate")
const { userSchema } = require("../models/userSchema")

const createUserValid = (req, res, next) => {
  const data = req.body
  createValidate(data, userSchema)
  next()
}

const updateUserValid = (req, res, next) => {
  const data = req.body
  updateValidate(data, userSchema)
  next()
}

exports.createUserValid = createUserValid
exports.updateUserValid = updateUserValid
