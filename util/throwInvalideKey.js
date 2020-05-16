const throwInvalidKey = (key) => {
  const err = {
    error: true,
    message: `${key} is invalid`,
  }
  throw err
}

exports.throwInvalidKey = throwInvalidKey
