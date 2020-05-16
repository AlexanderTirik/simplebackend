const findRequiredKeys = (object, schema) =>
  Object.keys(schema).filter((key) => object[key] === undefined)

exports.findRequiredKeys = findRequiredKeys
