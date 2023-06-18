const { Router } = require("express")
const FAQController = require("../controllers/FAQController")

const router = Router()

router.get("/faq", FAQController.getFAQ)
router.post("/faq", FAQController.createFAQ)
router.delete("/faq", FAQController.deleteFAQ)

module.exports = router
