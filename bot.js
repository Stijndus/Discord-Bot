const Discord = require('discord.js');
const Levels = require('discord-xp');
const mongoose = require('./database/mongoose');
const fs = require('fs');


const {
	token,
	password
} = require('./config.json')
const client = new Discord.Client();
Levels.setURL(`mongodb+srv://discordbot:${process.env.PASSWORD}@bot.awqta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, Discord));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, Discord));
	}
}

client.login(process.env.TOKEN);