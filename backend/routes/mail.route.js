const { Router } = require("express")
const MailController = require("../controllers/MailController")

const router = Router()

router.get("/mail", MailController.sendMail)

module.exports = router
