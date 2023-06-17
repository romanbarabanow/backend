const { Router } = require("express")
const YachtsControllers = require("../controllers/YachtsController")

const router = Router()

router.post("/yachts", YachtsControllers.createYachts)
router.get("/yachts", YachtsControllers.getAllYachts)
router.delete("/yachts", YachtsControllers.deleteYachts)
router.get("/yachts/town", YachtsControllers.getYachtsbyTown)
router.get("/yachts/id", YachtsControllers.getYachtsbyId)

module.exports = router
