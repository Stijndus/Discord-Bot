module.exports = {
    name: 'twitch',
    description: 'Sends Twitch link <3',
    execute(message, args, Discord, client) {
        message.channel.send('https://www.twitch.tv/st1n0_/');
    }
}