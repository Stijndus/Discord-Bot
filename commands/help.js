

module.exports = {
    name: 'Help',
    description: 'Gives all commands',
    execute(message, args, Discord, client) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Socials')

            .setDescription('Gives my socials')

            .addFields({
                name: 'Instagram',
                value: '[s.tin.o](https://www.instagram.com/s.tin.o/)',
                inline: true
            })
        message.channel.send(exampleEmbed);
    }
}