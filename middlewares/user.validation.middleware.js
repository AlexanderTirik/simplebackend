const { user } = require("../models/user")

const isUndefined = (value) => value === undefined

const userSchema = {
  email: (value) =>
    !isUndefined(value) &&
    /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g.test(value),
  phoneNumber: (value) => !isUndefined(value) && /^\+380\d{9}$/g.test(value),
  password: (value) => !isUndefined(value) && value.length >= 3,
  firstName: (value) => !isUndefined(value) && value.length > 0,
  lastName: (value) => !isUndefined(value) && value.length > 0,
}

const createValidate = (object, schema) => {
  const invalid = Object.keys(object).filter(
    (key) => isUndefined(schema[key]) || !schema[key](object[key])
  )
  if (invalid.length > 0) {
    const err = {
      error: true,
      message: `${invalid[0]} is invalid`,
    }
    throw err
  }
  const notFound = Object.keys(schema).filter((key) => isUndefined(object[key]))
  if (notFound.length > 0) {
    const err = {
      error: true,
      message: `${notFound[0]} is invalid`,
    }
    throw err
  }
  return
}

const updateValidate = (object, schema) => {
  const invalid = Object.keys(object).filter((key) =>!isUndefined(schema[key]) && !schema[key](object[key]))
  if (invalid.length > 0) {
    const err = {
      error: true,
      message: `${invalid[0]} is invalid`,
    }
    throw err
  }

  const notFound = Object.keys(object).filter((key) => isUndefined(schema[key]))
  if (notFound.length > 0) {
    const err = {
      error: true,
      message: `${notFound[0]} is invalid`,
    }
    throw err
  }
  return
}

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
