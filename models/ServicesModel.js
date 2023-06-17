const { Schema, model } = require("mongoose")

const Services = new Schema({
  town: { type: String, required: true },
  name: { type: String, required: true },
  des: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
})

module.exports = model("Services", Services)
