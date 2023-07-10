const { Schema, model } = require("mongoose")

const Services = new Schema({
  town: { type: String, required: true },
  name: { type: String, required: true },
  pages: { type: Array, default: [] },
})

module.exports = model("Catering", Services)
