const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://45.12.75.171:27017/yachts", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

const yachtsRouter = require("./routes/yachts.route")
const userRouter = require("./routes/user.route")
const townRouter = require("./routes/town.route")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", yachtsRouter)
app.use("/api", userRouter)
app.use("/api", townRouter)

app.listen(4000, () => {
  console.log("Server is running")
})
