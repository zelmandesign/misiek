const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const prefix = process.env.prefix;
const bluzgi = require('./bluzgi.json');

client.on('ready', () => {
	const welcome = `Nareszcie na wolności ${client.user.tag}!`;
	console.log(welcome);
	// test
	client.channels.cache.get('553991479857643525').send(welcome);
	// LS
	// client.channels.cache.get('553217226442932237').send(welcome);

	const myGames = [
		'Doom Eternal',
		'Arma 3',
		'QuakeWorld',
		'CPMA',
		'Diablo 3',
		'Path of Exile',
		'Escape From Tarkov',
	];

	function changeGame() {
		const randomGame = myGames[Math.floor(Math.random() * myGames.length)];
		console.log(randomGame);
		client.user.setActivity(randomGame, { type: 'PLAYING' });
	}
	changeGame();
	setInterval(changeGame, 180000);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command) {
	case 'ping':
		message.channel.send('Pong.');
		break;

	case 'server':
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		break;

	case 'user-info':
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
		break;

	case 'zbluzgaj': {
		if (!message.mentions.users.size) {
			return message.reply('musisz wybrać kogoś, zebym go mógł pocisnąć!');
		}
		const taggedUser = message.mentions.users.first();
		const randomoweBluzgi = bluzgi[Math.floor(Math.random() * bluzgi.length)];
		message.channel.send(`${taggedUser.username} ${randomoweBluzgi.sentence}`);
		break;
	}
	}
});

// client.on('message', msg => {
// 	if (msg.channel.type == 'dm') {
// 		const randomoweBluzgi_dm = bluzgi[Math.floor(Math.random() * bluzgi.length)];
// 		msg.author.send(`${msg.author} ${randomoweBluzgi_dm.sentence}`);
// 		return;
// 	}
// });

client.login(process.env.DISCORD_TOKEN);
