const Levels = require('discord-xp');

module.exports = {
    name: 'edit',
    description: 'Gives your levl',
    async execute(message, args, Discord, client) {
        let usage = '!edit @user [xp, level] [add, set, remove] <amount>';

        
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`You need to add more arguments: ***${usage}***`);
        if(!mentionedMember) return message.channel.send(`This member is not part of this server!`);
        if(!args[1]) return message.channel.send(`You need to state if you want to edit the members level or xp: ***${usage}***`);

        if(args[1] === 'xp'){
            if(!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`You need to state if you want to add/set/remove the members xp: ***${usage}***`);
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if(!levelUser) return message.channel.send(`That member is not registered within the database yet`);
            if(args[2] === 'add'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                await Levels.appendXp(mentionedMember.user.id, message.guild.id, value);
                message.channel.send(`Added: ${value} xp to ${mentionedMember}`);
                } catch(err){
                    console.log(err)
                }
            } else if(args[2] === 'set'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                    await Levels.setXp(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Set: ${value} xp to ${mentionedMember}`);
                    } catch(err){
                        console.log(err)
                    }
            } else if(args[2] === 'remove'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                    await Levels.subtractXp(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Removed: ${value} xp from ${mentionedMember}`);
                    } catch(err){
                        console.log(err)
                    }
            }
        } else if (args[1] === 'levels'){
            if(!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`You need to state if you want to add/set/remove the members level(s): ***${usage}***`);
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if(!levelUser) return message.channel.send(`That member is not registered within the database yet`);
            if(args[2] === 'add'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id, value);
                message.channel.send(`Added: ${value} level to ${mentionedMember}`);
                } catch(err){
                    console.log(err)
                }
            } else if(args[2] === 'set'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                    await Levels.setLevel(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Set: ${value} level to ${mentionedMember}`);
                    } catch(err){
                        console.log(err)
                    }
            } else if(args[2] === 'remove'){
                if(!value) return message.channel.send(`The number stated is not a valid number.`)
                try{
                    await Levels.subtractLevel(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Removed: ${value} level from ${mentionedMember}`);
                    } catch(err){
                        console.log(err)
                    }
            }
        }
    }
}