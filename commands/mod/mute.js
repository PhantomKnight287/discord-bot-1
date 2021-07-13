const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class MuteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            group: 'mod',
            memberName: 'mute',
            description: 'Mute the desired member',
            guildOnly: true,
            clientPermissions: [
                'MANAGE_MESSAGES'
            ],
            userPermissions: [
                'MANAGE_ROLES'
            ]
        });

    }
    run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Ginger Fam')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let memberTarget = message.guild.members.cache.get((target.id))

            if (memberTarget.bannable) {
                memberTarget.roles.remove(mainRole.id)
                memberTarget.roles.add(muteRole.id)

                var muteEmbed = new Discord.MessageEmbed()
                    .setColor('#FF000')
                    .setDescription(`${target} has been muted`)
                    .setFooter(`Muted by ${message.author.tag}`)
                message.channel.send(muteEmbed)

            } else {
                var muteEmbed = new Discord.MessageEmbed()
                    .setColor('#FFF00')
                    .setDescription('I cant mute that user')
                    .setFooter(`Muted by ${message.author.tag}`)
                message.channel.send(muteEmbed)
            }

        }
        else {
            var muteEmbed = new Discord.MessageEmbed()
                .setColor('#FFF00')
                .setDescription('Please mention a member to mute')
            message.channel.send(muteEmbed)
        }

    }
};