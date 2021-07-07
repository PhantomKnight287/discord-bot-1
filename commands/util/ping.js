const { Command } = require("discord.js-commando");

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
    const pingMsg = await message.say("Pinging...");
    return pingMsg.edit(
      `:ping_pong: Pong! \`${Math.round(this.client.ws.ping)}ms\``
    );
  }
};
