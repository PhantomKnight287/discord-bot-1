const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      group: "util",
      memberName: "ping",
      description: "Checks the bot's ping time",
      throttling: {
        usages: 2,
        duration: 10,
      },
    });
  }

  async run(message) {
    const pingEmbed = new MessageEmbed()
      .setTitle("Pinging...")
      .setColor("#ffffff");
    const embed = new MessageEmbed()
      .setTitle("Ping")
      .setDescription(
        `:ping_pong: Pong! \`${Math.round(this.client.ws.ping)}ms\``
      )
      .setColor("#1ee0eb");
    await message.say(pingEmbed).then((m) => {
      m.edit(embed);
    });
  }
};
