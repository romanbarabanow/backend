const AboutModel = require("../models/AboutModel")

const changeAbout = async (req, res) => {
  const { id, text } = req.body

  const isExist = await AboutModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Описание не найдено" }).status(400)
  } else {
    await AboutModel.findOneAndUpdate({ _id: id }, { text: text })
    res.json({ message: "Успешно" }).status(200)
  }
}

const getAbout = async (req, res) => {
  const { town } = req.query

  const about = await AboutModel.findOne({ town })

  if (about == null) {
    res.json({ message: "Описание не найдено" })
  } else {
    res.json(about).status(200)
  }
}

module.exports = {
  changeAbout,
  getAbout,
}
