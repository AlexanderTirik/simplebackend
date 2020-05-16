const { findInvalidKeys } = require("./findInvalidKeys")
const { throwInvalidKey } = require("./throwInvalideKey")

const updateValidate = (object, schema) => {
  const invalid = findInvalidKeys(object,schema)
  if (invalid.length > 0) {
    throwInvalidKey(invalid[0])
  }
  return
}

exports.updateValidate = updateValidate
