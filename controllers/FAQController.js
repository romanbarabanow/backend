const FAQModel = require("../models/FAQModel")

const createFAQ = async (req, res) => {
  const { town, question, answer } = req.body

  const newFAQ = new FAQModel({
    town,
    question,
    answer,
  })

  newFAQ.save()

  res.json({ message: "Success" }).status(200)
}

const getFAQ = async (req, res) => {
  const { town } = req.body

  const FAQ = await FAQModel.find({ town })

  res.json(FAQ).status(200)
}

const deleteFAQ = async (req, res) => {
  const { id } = req.body

  const isExist = await FAQModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Faq не найден" }).status(400)
  } else {
    await FAQModel.findOneAndDelete({ _id: id })
    res.json({ message: "Success" }).status(200)
  }
}

module.exports = {
  createFAQ,
  getFAQ,
  deleteFAQ,
}
