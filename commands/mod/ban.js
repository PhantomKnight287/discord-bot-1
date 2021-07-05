const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'mod',
            memberName: 'ban',
            description: 'Bans a member from the server',
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            argsType: 'multiple',
            argsCount: 2,
            guildOnly: true
        })
    }

    async run(message, args) {
        const target = message.mentions.users.first();

        var arg1 = `<@!${target.id}>`
        if (arg1 === args[0]) { args.shift(); }
        if (!args.length) { var reason = 'No reason specified'; }
        else { reason = args[0] }

        if (!target) {
            message.reply('Please mention the user to ban.');
            return;
        }

        const { guild } = message;
        const member = guild.members.cache.get(target.id);
        if (member.bannable) {
            member.ban({reason: reason});
            message.channel.send(`Banned \`${target.tag}\``);
        } else {
            message.reply('I cannot ban that user.');
        }
    }

    async onError(err, message) {
        if (err = TypeError) {
            message.reply("Please mention the user to ban!")
        }
    }
}
