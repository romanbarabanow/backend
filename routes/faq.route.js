const { Router } = require("express")
const FAQController = require("../controllers/FAQController")

const middleware = require("../middleware/auth.middleware")

const router = Router()

router.get("/faq", FAQController.getFAQ)
router.post("/faq", middleware, FAQController.createFAQ)
router.delete("/faq", middleware, FAQController.deleteFAQ)

module.exports = router
