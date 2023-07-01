const fs = require("fs")
const YachtsModel = require("../models/YachtsModel")

const createYachts = async (req, res) => {
  const {
    imageUrls,
    model,
    name,
    manufacturer,
    clas,
    shipyard,
    year,
    engine,
    width,
    length,
    draught,
    spead,
    number_of_cabins,
    passenger_capacity,
    description,
    town,
    price,
  } = req.body

  const newYachts = new YachtsModel({
    image: imageUrls,
    town,
    price,
    spec: {
      model,
      name,
      class: clas,
      manufacturer,
      shipyard,
      year,
      engine,
      width,
      length,
      draught,
      spead,
      number_of_cabins,
      passenger_capacity,
    },
    description,
  })

  newYachts.save()

  res.json(newYachts).status(200)
}

const getAllYachts = async (req, res) => {
  const yachts = await YachtsModel.find()
  res.json(yachts)
}

const getYachtsbyTown = async (req, res) => {
  const { town } = req.query

  const yachts = await YachtsModel.find({ town })

  if (yachts.length == 0) {
    res.json({ message: "Яхты не найдены" })
  } else {
    res.json(yachts).status(200)
  }
}

const getYachtsbyId = async (req, res) => {
  const { id } = req.query

  const yacht = await YachtsModel.findOne({ _id: id })

  if (yacht == null) {
    res.json({ message: "Яхта не найдена" }).status(200)
  } else {
    res.json(yacht).status(200)
  }
}

const deleteYachts = async (req, res) => {
  const { id } = req.body

  const isExist = await YachtsModel.findOne({ _id: id })

  if (isExist == null) {
    res.json({ message: "Яхта не найдена" }).status(400)
  } else {
    await YachtsModel.findOneAndDelete({ _id: id })
    res.json({ message: "Success" }).status(200)
  }
}

module.exports = {
  createYachts,
  getAllYachts,
  getYachtsbyTown,
  deleteYachts,
  getYachtsbyId,
}
