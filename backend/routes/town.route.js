const { Router } = require("express")

const TownController = require("../controllers/TownController")

const middleware = require("../middleware/auth.middleware")

const router = Router()

router.post("/town", middleware, TownController.createTown)
router.post("/town/change", middleware, TownController.editTown)
router.get("/town", TownController.getAllTowns)
router.delete("/town", middleware, TownController.deleteTown)
router.get("/all-info", TownController.getAllInfo)
router.get("/town/name", TownController.getTownByName)

module.exports = router
