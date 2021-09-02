const mongoose = require('mongoose');
const { password } = require('../config.json')
module.exports = {
    init: () => {
        const dbOptions = {
            userNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4,
        };

        mongoose.connect(`mongodb+srv://discordbot:${password}@bot.awqta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Connected');
        })

        mongoose.connection.on('disconnected', () => {
            console.log('disconnected');
        })

        mongoose.connection.on('Error', () => {
            console.log('Error: ' + err);
        })
    }
}