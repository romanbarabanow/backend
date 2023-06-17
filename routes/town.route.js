const { Router } = require("express")

const TownController = require("../controllers/TownController")

const router = Router()

router.post("/town", TownController.createTown)
router.get("/town", TownController.getAllTowns)
router.patch("/town", TownController.editTown)
router.delete("/town", TownController.deleteTown)
router.get("/all-info", TownController.getTownAndYachts)

module.exports = router
