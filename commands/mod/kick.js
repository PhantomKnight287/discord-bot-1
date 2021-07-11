const { Command } = require("discord.js-commando");
const { prefix } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: "kick",
      group: "mod",
      memberName: "kick",
      description: "Kicks a member from the server",
      clientPermissions: ["KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
      argsType: "multiple",
      argsCount: 2,
      guildOnly: true,
    });
  }

  async run(message, args) {
    const missingArgsEmbed = new MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Missing Arguments").setDescription(`
       	Some arguments are missing.
        Usage: ${prefix}kick <user> <reason>
      `);

    if (args == "") {
      return message.say(missingArgsEmbed);
    }

    const target = message.mentions.users.first();

    var arg1 = `<@!${target.id}>`;
    if (arg1 === args[0]) {
      args.shift();
    }
    if (!args.length) {
      var reason = "No reason specified";
    } else {
      reason = args[0];
    }

    if (!target) {
      message.reply("Please mention the user to kick.");
      return;
    }

    const { guild } = message;
    const member = guild.members.cache.get(target.id);
    if (member.kickable) {
      member.kick(reason);
      message.channel.send(`I have kicked \`${target.tag}\` | ${reason}`);
    } else {
      message.reply("I cannot kick that user.");
    }
  }
};
