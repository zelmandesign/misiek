const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log('Bot is now connected');

  client.channels.find(x => x.name === 'lubie-sranie-po-ataku').send('Wreszcie na wolnosci! // Misiek BOT 0.1 connected');
});

client.on('message', (msg) => {
  if (msg.content === 'elo') {
    msg.channel.send(`Elo ${msg.author}! Mordo ile potrzebujesz?`);
  }

  if (msg.content === 'cwel') {
    msg.channel.send(`${msg.author}, klekaj do miecza`);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'lubie-sranie-po-ataku');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Witaj na rejonie ${member}! Badz elegancki mordo`);
});

client.login(token);