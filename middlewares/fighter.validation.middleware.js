const { fighter } = require("../models/fighter")

const isUndefined = (value) => value === undefined

const fighterSchema = {
  name: (value) => !isUndefined(value) && value.length > 0,
  power: (value) =>
    !isUndefined(value) && parseInt(value, 10) && value < 100 && value > 0,
  defense: (value) =>
    !isUndefined(value) && parseInt(value, 10) && value <= 10 && value > 0,
  health: (value) =>
    !isUndefined(value) && parseInt(value, 10) && value <= 100 && value > 0,
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
      message: `${notFound[0]} not found`,
    }
    throw err
  }
  return
}

const updateValidate = (object, schema) => {

  const invalid = Object.keys(object).filter((key) => !isUndefined(schema[key]) && !schema[key](object[key]))
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
      message: `${notFound[0]} not found`,
    }
    throw err
  }
  return
}

const createFighterValid = (req, res, next) => {
  const data = req.body
  createValidate(data, fighterSchema)
  next()
}

const updateFighterValid = (req, res, next) => {
  const data = req.body
  updateValidate(data, fighterSchema)
  next()
}

exports.createFighterValid = createFighterValid
exports.updateFighterValid = updateFighterValid
