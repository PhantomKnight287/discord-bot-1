const { Command } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class UnmuteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'unmute',
            group: 'mod',
            memberName: 'unmute',
            description: 'Unmute the muted member',
            guildOnly: true,
            clientPermissions: [
                'MANAGE_ROLES'
            ],
            userPermissions: [
                'MANAGE_MESSAGES'
            ]
        });

    }
    run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Ginger Fam')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let memberTarget = message.guild.members.cache.get((target.id))

            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
            
            var muteEmbed = new Discord.MessageEmbed()
                .setColor('#FFFF00')
                .setDescription(`${target} has been unmuted`)
                .setFooter(`Muted by ${message.author.tag}`)
            message.channel.send(muteEmbed)
        } else {
            message.channel.send('Cant find that member')
        }

        

    }
};