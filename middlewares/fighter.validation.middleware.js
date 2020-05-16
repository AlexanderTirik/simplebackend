const { fighterSchema } = require("../models/fighterSchema")
const { createValidate } = require("../util/createValidate")
const { updateValidate } = require("../util/updateValidate")

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
