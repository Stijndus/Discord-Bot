const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`)
})

client.login('ODU5NzEyMzIwNzQxMTc5NDIx.YNwrfQ.s_YUxYE0NAEeYxx083K28yu1EJ0');