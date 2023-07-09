const { Schema, model } = require("mongoose")

const Town = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
})

module.exports = model("Town", Town)
