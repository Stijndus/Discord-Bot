

const Levels = require('discord-xp');

module.exports = {
    name: 'message',
    async execute(message, client, Discord) {

        if (message.author.bot || message.channel.type == 'dm') return;
        const randomXp = Math.floor(Math.random() * 29) + 1;      
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if(hasLeveledUp){
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.member}, you have leveled up to ${user.level}! :confetti_ball: :confetti_ball: `)
        }

        if (!message.content.startsWith(process.env.PREFIX)) return

        

        const args = message.content.slice(prefix.length).split(" ");

        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName) && !client.commands.find(a => a.aliases && a.aliases.includes(commandName))) return;

        
        const command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(commandName));

        try {
            command.execute(message, args,  Discord, client, commandName);
        } catch (err) {
            console.log(err);
        }
    }
};