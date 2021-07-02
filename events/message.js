const {
    prefix
} = require('../config.json');

const Levels = require('discord-xp');

module.exports = {
    name: 'message',
    async execute(message, client, Discord) {
        if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type == 'bot') return;

        const randomXp = Math.floor(Math.random() * 29) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if(hasLeveledUp){
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.member}, you have leveled up to ${user.level}! <3`)
        }

        const args = message.content.slice(prefix.length).split(/ + /);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        
        const command = client.commands.get(commandName);

        try {
            command.execute(message, args,  Discord, client);
        } catch (err) {
            console.log(err);
        }
    }
};