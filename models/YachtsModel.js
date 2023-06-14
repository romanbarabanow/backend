const { Schema, model } = require("mongoose")

const Yachts = new Schema({
  image: { type: String, required: true },
  town: { type: String, required: true },
  spec: {
    model: { type: String, required: true },
    name: { type: String, required: true },
    class: { type: String, required: true },
    manufacturer: { type: String, required: true },
    shipyard: { type: String, required: true },
    year: { type: Number, required: true },
    engine: { type: String, required: true },
    width: { type: Number, required: true },
    length: { type: Number, required: true },
    draught: { type: Number, required: true },
    spead: { type: Number, required: true },
    number_of_cabins: { type: Number, required: true },
    passenger_capacity: { type: Number, required: true },
  },
  description: { type: String, required: true },
})

module.exports = model("Yachts", Yachts)
