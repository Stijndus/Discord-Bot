const {
    prefix
} = require('../config.json');

module.exports = {
    name: 'message',
    execute(message, client, Discord) {
        if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type == 'bot') return;

        const args = message.content.slice(prefix.length).split(/ + /);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(message, args, client, Discord);
        } catch (err) {
            console.log(err);
        }
    }
};