const jwt = require("jsonwebtoken")
const UserModel = require("../models/UserModel")

module.exports = async (req, res, next) => {
  const { token } = req.query

  if (!token) {
    res.json({ message: "Error" })
  } else {
    const decodedToken = jwt.decode(token, "bogdanloh123337228")

    const isExist = await UserModel.findOne({
      email: decodedToken.email,
      password: decodedToken.password,
    })

    if (isExist == null) {
      res.json({ message: "Error" })
    } else {
      next()
    }
  }
}
