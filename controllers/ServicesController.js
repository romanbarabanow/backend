const ServicesModel = require("../models/ServicesModel")

const changeService = async (req, res) => {
  const { des, id, imageUrl } = req.body

  const isExist = await ServicesModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Услуги не найдены" }).status(400)
  } else {
    await ServicesModel.findOneAndUpdate({ _id: id }, { des, imageUrl })

    res.json({ message: "Success" }).status(200)
  }
}

const getService = async (req, res) => {
  const { name, town } = req.query

  const service = await ServicesModel.findOne({ name, town })

  res.json(service).status(200)
}

module.exports = {
  changeService,
  getService,
}
