const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log('Bot is now connected');
  client.user.setGame('Quake 1');

  client.channels.find(x => x.name === 'general').send('Wreszcie na wolnosci! // Misiek BOT 0.1 connected');
});

client.on('message', (msg) => {
  if (msg.content === 'elo') {
    msg.channel.send(`Elo ${msg.author}! Mordo czego potrzebujesz?`);
    client.user.setUsername("Misiek z Nadarzyna");
    client.user.setGame('Quake 1');
  }

  if (msg.content === '200') {
    msg.channel.send(`${msg.author} za malo. Idz do zabki po wiecej`);
    client.user.setUsername("Romski Wirazka");
    client.user.setGame('Lubelska Wisniowka');
  }

  if (msg.content === 'cwel') {
    msg.channel.send(`${msg.author}, klekaj do miecza`);
    client.user.setUsername("Misiek z Nadarzyna");
    client.user.setGame('Quake 1');
  }

  if (msg.content === 'kolor') {
    msg.channel.send(`${msg.author} Piwo po sosnowiecku = Kolor i 200mil?`);
    client.user.setUsername("Romski Wirazka");
    client.user.setGame('Lubelska Grejfrutowka');
  }

  if (msg.content === 'tarkov') {
    msg.channel.send(`${msg.author} mordo mam za duze lagi a przyjebie`);
    client.user.setUsername("Misiek z Tarkova");
    client.user.setGame('Ucieczka z Tarkova');
  }

});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Witaj na rejonie ${member}! Zeby zawsze sie farcilo mordo`);
});

client.on('message', msg => {
  if (msg.channel.type == "dm") {
    msg.author.send(`${msg.author} szukasz chuja do dupy?`);
    return;
  }
});

client.login(config.token);