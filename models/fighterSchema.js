const fighterSchema = {
  name: (value) => value !== undefined && value.length > 0,
  power: (value) =>
    value !== undefined && parseInt(value, 10) && value < 100 && value > 0,
  defense: (value) =>
    value !== undefined && parseInt(value, 10) && value <= 10 && value > 0,
  health: (value) =>
    value !== undefined && parseInt(value, 10) && value <= 100 && value > 0,
}

exports.fighterSchema = fighterSchema
