const { Command } = require("discord.js-commando");

module.exports = class PurgeCommand extends Command {
  constructor(props) {
    super(props, {
      name: "purge",
      group: "mod",
      memberName: "purge",
      description: "Clears a number of messages",
      aliases: ["clear", "clr"],
      guildOnly: true,
      args: [
        {
          key: "number",
          prompt: "Number of messages to clear",
          type: "integer",
          default: 2,
          max: 100,
        },
      ],
      clientPermissions: ["MANAGE_MESSAGES"],
      userPermissions: ["MANAGE_MESSAGES"],
    });
  }

  async run(message, { number }) {
    message.channel
      .bulkDelete(number + 1)
      .then((msgs) => {
        message.reply(`Purged \`${number}\` messages`);
      })
      .catch((e) => {
        message.reply("An error occured.");
        console.log(e);
      });
  }
};
