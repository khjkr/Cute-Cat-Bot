const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const prefix = '냥!'

client.on('ready', () => {
  console.log(`${client.user.tag} is ready.`)
})

client.on('message', (msg) => {
  if (msg.author == 'bot') return
  if (!msg.content.startsWith(prefix)) return

  if (msg.content == `${prefix}핑`) {
    msg.reply(`Pong! ${client.ws.ping}ms`)
  }
})

client.login(config.token)