const { findInvalidKeys } = require("./findInvalidKeys")
const { findRequiredKeys } = require("./findRequiredKeys")
const { throwInvalidKey } = require("./throwInvalideKey")

const createValidate = (object, schema) => {
  const invalid = findInvalidKeys(object, schema)

  if (invalid.length > 0) {
    throwInvalidKey(invalid[0])
  }
  const requiredKeys = findRequiredKeys(object, schema)
  if (requiredKeys.length > 0) {
    throwInvalidKey(requiredKeys[0])
  }
  return
}

exports.createValidate = createValidate
