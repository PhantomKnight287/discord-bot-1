const { Command } = require("discord.js-commando");

module.exports = class Nickname extends Command {
  constructor(client) {
    super(client, {
      name: "nick",
      group: "misc",
      memberName: "nick",
      userPermissions: ["MANAGE_NICKNAMES", "CHANGE_NICKNAME"],
      clientPermissions: ["MANAGE_NICKNAMES", "CHANGE_NICKNAME"],
      description: "Changes the nickname of a user",
      argsType: "multiple",
      guildOnly: true,
      argsCount: 2,
    });
  }
  async run(message, args) {
    const user = message.mentions.users.first();
    const member = message.guild.members.cache.get(user.id);
    args.shift();
    member
      .setNickname(args.join(" "))
      .then(
        await message.reply(
          `Successfully changed the nickname of user ${user.username} to ${args}`
        )
      );
  }
};
