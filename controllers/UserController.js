const UserModel = require("../models/UserModel")
const jwt = require("jsonwebtoken")

const createAdmin = async (req, res) => {
  const { email, password } = req.body

  const isExist = await UserModel.findOne({ email })

  if (isExist == null) {
    const newAdmin = new UserModel({
      email,
      password,
    })

    newAdmin.save()
    res.json({ message: "Success" }).status(200)
  } else {
    res.json({ message: "Error" }).status(400)
  }
}

const loginAdmin = async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email, password })

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      "bogdanloh123337228"
    )
    res.json({ token: token }).status(200)
  } else {
    res.json({ message: "Error" }).status(400)
  }
}

module.exports = {
  createAdmin,
  loginAdmin,
}
