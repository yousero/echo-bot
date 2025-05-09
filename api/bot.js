const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.on('text', (ctx) => {
  const userText = ctx.message.text
  ctx.reply(`🔊 Echo: ${userText}`)
})

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body, res)
    } catch (err) {
      console.error(err)
      res.status(500).send('Error')
    }
  } else {
    res.status(200).send('Echo Bot is running!')
  }
}
