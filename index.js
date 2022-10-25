const Eris = require('eris');
require('dotenv').config();
const bot = new Eris(process.env.TOKEN);
// Replace TOKEN with your bot account's token

bot.on('ready', () => {
	console.log('Ready!');
});

bot.on('error', (err) => {
	console.error(err);
});

bot.on('messageCreate', (message) => {
	if(message.content === '!ping') {
		message.channel.createMessage('Pong!');
	}
	else if(message.content === '!pong') {
		message.channel.createMessage('Ping!');
	}
});

bot.connect();

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The bot is online')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})