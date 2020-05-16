const findInvalidKeys = (object, schema) =>
  Object.keys(object).filter(
    (key) => schema[key] === undefined || !schema[key](object[key])
  )

exports.findInvalidKeys = findInvalidKeys
