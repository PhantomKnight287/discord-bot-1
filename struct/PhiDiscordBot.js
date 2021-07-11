const { CommandoClient } = require("discord.js-commando");
const { join } = require("path");
require("dotenv").config();

class PhiDiscordBot extends CommandoClient {
  constructor(props) {
    super(props);
    this.config = require("../config.json");
    if (process.env.TOKEN == "") {
      return new TypeError("Please enter the bot's token in the .env file.");
    }

    // Options for Commando Client
    this.commandPrefix = this.config.prefix;

    this.on("ready", async () => {
      console.log(`I have logged in as ${this.user.tag} (id: ${this.user.id})`);

      this.registry
        .registerDefaultTypes()
        .registerDefaultGroups()
        .registerGroups([
          ["util", "Basic utility commands"],
          ["mod", "Moderation commands"],
        ])
        .registerDefaultCommands({
          ping: false,
          eval: false,
        })
        .registerCommandsIn(join(__dirname, "../commands"));
    });
  }

  start() {
    this.login(process.env.TOKEN);
  }
}

module.exports = PhiDiscordBot;
