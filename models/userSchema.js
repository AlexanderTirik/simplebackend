const userSchema = {
  email: (value) =>
    value !== undefined &&
    /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g.test(value),
  phoneNumber: (value) => value !== undefined && /^\+380\d{9}$/g.test(value),
  password: (value) => value !== undefined && value.length >= 3,
  firstName: (value) => value !== undefined && value.length > 0,
  lastName: (value) => value !== undefined && value.length > 0,
}

exports.userSchema = userSchema
