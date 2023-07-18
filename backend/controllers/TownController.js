const AboutModel = require("../models/AboutModel")
const CateringModel = require("../models/CateringModel")
const ServicesModel = require("../models/ServicesModel")
const TownModel = require("../models/TownModel")
const YachtsModel = require("../models/YachtsModel")

const createTown = async (req, res) => {
  const { name, country } = req.body

  const isExist = await TownModel.findOne({ name })

  if (isExist == null) {
    const newTown = new TownModel({
      name,
      country,
    })

    const newAbout = new AboutModel({
      town: name,
    })

    const newServiseOne = new CateringModel({
      town: name,
      name: "Кейтеринг",
    })

    const newServiseTwo = new ServicesModel({
      town: name,
      name: "Водные развлечения",
    })

    const newServiseThird = new ServicesModel({
      town: name,
      name: "Фотосессия",
    })

    const newServiseFourth = new ServicesModel({
      town: name,
      name: "Рыбалка",
    })

    const newServiseFive = new ServicesModel({
      town: name,
      name: "Организация праздника в море",
    })

    newAbout.save()
    newServiseOne.save()
    newServiseTwo.save()
    newServiseThird.save()
    newServiseFourth.save()
    newServiseFive.save()
    newTown.save()

    res.json({ message: "Success" }).status(200)
  } else {
    res.json({ message: "Error" }).status(200)
  }
}

const deleteTown = async (req, res) => {
  const { id } = req.body

  const town = await TownModel.findOne({ _id: id })

  if (town == null) {
    res.json({ message: "Город не найден" }).status(400)
  } else {
    await CateringModel.findOneAndDelete({
      town: town.name,
    })

    await ServicesModel.findOneAndDelete({
      town: town.name,
      name: "Водные развлечения",
    })

    await ServicesModel.findOneAndDelete({
      town: town.name,
      name: "Фотосессия",
    })

    await ServicesModel.findOneAndDelete({
      town: town.name,
      name: "Рыбалка",
    })
    await ServicesModel.findOneAndDelete({
      town: town.name,
      name: "Организация праздника в море",
    })

    await AboutModel.findOneAndDelete({
      town: town.name,
    })
    await TownModel.findOneAndDelete({ _id: id })
    res.json({ message: "Success" }).status(200)
  }
}

const getAllTowns = async (req, res) => {
  const towns = await TownModel.find()

  res.json(towns).status(200)
}

const getAllInfo = async (req, res) => {
  const { id } = req.query

  const town = await TownModel.findOne({ _id: id })

  if (town === null) {
    res.json({ message: "Город не найден" })
  } else {
    const about = await AboutModel.findOne({ town: town.name })
    const services = await ServicesModel.find({ town: town.name })
    const catering = await CateringModel.findOne({ town: town.name })
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
        about,
        services,
        catering,
      },
    })
  }
}

const getTownByName = async (req, res) => {
  const { town } = req.query

  const townw = await TownModel.findOne({ name: town })

  if (townw == null) {
    res.json({ message: "Город не найден" }).status(400)
  } else {
    res.json(townw).status(200)
  }
}

const editTown = async (req, res) => {
  const { id, name, country } = req.body

  const data = await TownModel.findOneAndUpdate(
    { _id: id },
    { name, country },
    { new: true }
  )

  res.json(data)
}

module.exports = {
  createTown,
  deleteTown,
  getAllTowns,
  getAllInfo,
  getTownByName,
  editTown,
}
