const CateringModel = require("../models/CateringModel")
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

const changeCatering = async (req, res) => {
  const { id, pages } = req.body

  const isExist = await CateringModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Услуги не найдены" }).status(400)
  } else {
    await CateringModel.findOneAndUpdate({ _id: id }, { pages: pages })
    res.json({ message: "Success" }).status(200)
  }
}

const getCatering = async (req, res) => {
  const { town } = req.query

  const service = await CateringModel.findOne({ town })

  res.json(service)
}

const getService = async (req, res) => {
  const { name, town } = req.query

  const service = await ServicesModel.findOne({ name, town })

  res.json(service).status(200)
}

module.exports = {
  changeService,
  getService,
  changeCatering,
  getCatering,
}
