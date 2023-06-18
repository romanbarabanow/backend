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
    year: { type: String, required: true },
    engine: { type: String, required: true },
    width: { type: String, required: true },
    length: { type: String, required: true },
    draught: { type: String, required: true },
    spead: { type: String, required: true },
    number_of_cabins: { type: String, required: true },
    passenger_capacity: { type: String, required: true },
  },
  description: { type: String, required: true },
})

module.exports = model("Yachts", Yachts)
