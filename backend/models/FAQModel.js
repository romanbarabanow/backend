const { Schema, model } = require("mongoose")

const FAQ = new Schema({
  town: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

module.exports = model("FAQ", FAQ)
