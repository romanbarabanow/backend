const { Router } = require("express")
const YachtsControllers = require("../controllers/YachtsController")

const middleawre = require("../middleware/auth.middleware")

const router = Router()

router.post("/yachts", middleawre, YachtsControllers.createYachts)
router.get("/yachts", YachtsControllers.getAllYachts)
router.delete("/yachts", middleawre, YachtsControllers.deleteYachts)
router.get("/yachts/town", YachtsControllers.getYachtsbyTown)
router.get("/yachts/id", YachtsControllers.getYachtsbyId)
router.get("/yachts/filter", YachtsControllers.yachtWithFilter)

module.exports = router
