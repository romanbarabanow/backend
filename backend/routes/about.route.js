const { Router } = require("express")

const middleware = require("../middleware/auth.middleware")

const AboutController = require("../controllers/AboutController")

const router = Router()

router.get("/about", AboutController.getAbout)
router.patch("/about", middleware, AboutController.changeAbout)

module.exports = router
