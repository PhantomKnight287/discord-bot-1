const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = class MemeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "meme",
      group: "misc",
      memberName: "meme",
      description: "Gives a random meme",
    });
  }

  async run(message) {
    const res = await fetch("https://api.gillsaab.repl.co/ProgrammerHumor")
      .then((response) => response.json())
      .then((data) => data);
    const embed = new MessageEmbed()
      .setColor("#fc6dbe")
      .setTitle(res.title)
      .setImage(res.link);
    await message.say(embed);
  }
};
