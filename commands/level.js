const Levels = require('discord-xp');

module.exports = {
    name: 'level',
    description: 'Gives your levl',
    async execute(message, args, Discord, client) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id)

        if (!target) return message.channel.send('The member does not have any levels within the server.')


        try {
            message.channel.send(`@${mentionedMember.user.tag} is level ${target.level} and has ${target.xp}/${Levels.xpFor(target.level + 1)}`);
        } catch (err) {
            console.log(err);
        }
    }
}