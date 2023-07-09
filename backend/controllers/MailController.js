const TelegramBot = require("node-telegram-bot-api")

const token = "5401350979:AAHRBKT7aLbW-peUg_sGN1c6K1_R9vpaZ4s"

// const bot = new TelegramBot(token, { polling: true })

const sendMail = async (req, res) => {
  const { phone, name, yacht } = req.query

  // bot
  //   .sendMessage(
  //     765149596,
  //     `
  //   У вас новое письмо от ${name}
  // его номер телефона ${phone}
  // Он хочет заказать яхту ${yacht}
  // `
  //   )
  //   .then(() => {
  //     res.json({ status: "ok" }).status(200)
  //   })
}

module.exports = {
  sendMail,
}
