const { Router } = require("express")

const UserController = require("../controllers/UserController")

const router = Router()

router.post("/login", UserController.loginAdmin)
router.post("/register", UserController.createAdmin)

module.exports = router
