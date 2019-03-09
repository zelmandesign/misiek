const Discord = require('discord.js');
const token = 'NTUzMjk5OTYxODAyOTE1ODUw.D2VqIQ.YGO_oiwVm2vKtRc788FiPVObhYQ';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is now connected');

  client.channels.find(x => x.name === 'lubie-sranie-po-ataku').send('Wreszcie na wolnosci! // Misiek BOT 0.1 connected');
});

client.on('message', (msg) => {
  if (msg.content === 'elo') {
    msg.channel.send(`Elo ${msg.author} mordo! Ile potrzebujesz?`);
  }

  if (msg.content === 'cwel') {
    msg.channel.send(`${msg.author}, klekaj do miecza`);
  }
});

client.login(token);