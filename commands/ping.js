module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args, Discord, client){
        message.channel.send('Pong!');
    }
}