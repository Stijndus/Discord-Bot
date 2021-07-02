
module.exports = {
    name: 'socials',
    description: 'All my socials',
    execute(message, args, Discord, client) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Socials')

            .setDescription('Gives my socials')

            .addFields({
                name: 'Instagram',
                value: '[s.tin.o](https://www.instagram.com/s.tin.o/)',
                inline: true
            }, {
                name: 'Twitter',
                value: '[ST1N0_](https://twitter.com/ST1N0_)',
                inline: true
            }, {
                name: 'Reddit',
                value: '[ST1N0_](https://www.reddit.com/user/st1n0_)',
                inline: true
            }, {
                name: 'Youtube',
                value: '[ST1N0](https://www.youtube.com/channel/UC0jU5KTJuHemOwEO1rQvdbg)',
                inline: true
            })
        message.channel.send(exampleEmbed);
    }
}