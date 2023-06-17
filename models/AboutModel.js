const { Schema, model } = require("mongoose")

const About = new Schema({
  text: { type: String, default: "" },
  town: { type: String, required: true },
})

module.exports = model("About", About)
