const { Router } = require("express")

const AboutController = require("../controllers/AboutController")

const router = Router()

router.get("/about", AboutController.getAbout)
router.patch("/about", AboutController.changeAbout)

module.exports = router
