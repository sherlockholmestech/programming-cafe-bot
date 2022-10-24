// index.js
const Eris = require('eris');
require('dotenv').config();
const bot = new Eris(process.env.TOKEN);
// Replace TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("messageCreate", (message) => { // When a message is created
    if(message.content === "!ping") { // If the message content is "!ping"
        message.channel.createMessage("Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(message.content === "!pong") { // Otherwise, if the message is "!pong"
        message.channel.createMessage("Ping!");
        // Respond with "Ping!"
    }
});

bot.connect(); // Get the bot to connect to Discord