const { FighterRepository } = require("../repositories/fighterRepository")

class FighterService {
  getAllFighters() {
    return FighterRepository.getAll()
  }

  addFighter(fighter) {
    return FighterRepository.create(fighter)
  }

  getFighter(id) {
    const fighter = FighterRepository.getOne((el) => el.id === id)
    if (fighter) {
      return fighter
    } else {
      const err = {
        error: true,
        message: "Fighter not found",
      }
      throw err
    }
  }

  isExistFighter(id) {
    const fighter = FighterRepository.getOne((el) => el.id === id)
    if (fighter) return true
    else return false
  }

  updateFighter(id, dataToUpdate) {
    if (this.isExistFighter(id)) {
      return FighterRepository.update(id, dataToUpdate)
    } else {
      const err = {
        error: true,
        message: "Fighter not found",
      }
      throw err
    }
  }

  deleteFighter(id) {
    if (this.isExistFighter(id)) {
      FighterRepository.delete(id)
    } else {
      const err = {
        error: true,
        message: "Fighter not found",
      }
      throw err
    }
  }
}

module.exports = new FighterService()
