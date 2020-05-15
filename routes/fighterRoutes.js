const { Router } = require("express")
const FighterService = require("../services/fighterService")
const { responseMiddleware } = require("../middlewares/response.middleware")
const { errorHandlerMiddleware} = require("../middlewares/errorHadler.middleware")
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware")

const router = Router()

router.get(
  "/",
  (req, res, next) => {
    const allFighters = FighterService.getAllFighters()
    res.data = allFighters
    next()
  },
  responseMiddleware
)

router.get(
  "/:id",
  (req, res, next) => {
    const id = req.params.id
    const fighter = FighterService.getFighter(id)
    res.data = fighter
    next()
  },
  responseMiddleware
)

router.post(
  "/",
  createFighterValid,
  (req, res, next) => {
    const newFighter = FighterService.addFighter(req.body)
    res.data = newFighter
    next()
  },
  responseMiddleware
)

router.put(
  "/:id", updateFighterValid,
  (req, res, next) => {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedFighter = FighterService.updateFighter(id, dataToUpdate)
    res.data = updatedFighter
    next()
  },
  responseMiddleware
)

router.delete(
  "/:id",
  (req, res, next) => {
    const id = req.params.id
    FighterService.deleteFighter(id)
    res.data = "Success"
    next()
  },
  responseMiddleware
)

router.use(errorHandlerMiddleware, responseMiddleware)

module.exports = router
