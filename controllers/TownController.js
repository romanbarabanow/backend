const TownModel = require("../models/TownModel")
const YachtsModel = require("../models/YachtsModel")

const createTown = async (req, res) => {
  const { name, country, services } = req.body

  const isExist = await TownModel.findOne({ name })

  if (isExist == null) {
    const newTown = new TownModel({
      name,
      country,
      services: services,
    })

    newTown.save()

    res.json({ message: "Success" }).status(200)
  } else {
    res.json({ message: "Error" }).status(200)
  }
}

const editTown = async (req, res) => {
  const { name, country, services } = req.body

  await TownModel.findOneAndUpdate({ name }, { name, country, services })

  res.json({ message: "Success" }).status(200)
}

const deleteTown = async (req, res) => {
  const { id } = req.body

  const isExist = await TownModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Город не найден" }).status(400)
  } else {
    await TownModel.findOneAndDelete({ _id: id })
    res.json({ message: "Success" }).status(200)
  }
}

const getAllTowns = async (req, res) => {
  const towns = await TownModel.find()

  res.json(towns).status(200)
}

const getTownAndYachts = async (req, res) => {
  const { id } = req.body

  const town = await TownModel.findOne({ _id: id })

  if (town == null) {
    res.json({ message: "Город не найден" })
  }
  {
    const yachtsArray = await YachtsModel.find({ town: town.name })

    const yachts = []
    yachtsArray.map(function (el) {
      yachts.push({
        spec: el.spec,
        des: el.description,
        id: el._id,
      })
    })
    res.json({
      data: {
        yachts,
        town,
      },
    })
  }
}

module.exports = {
  createTown,
  editTown,
  deleteTown,
  getAllTowns,
  getTownAndYachts,
}
