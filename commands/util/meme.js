const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = class MemeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "meme",
      group: "util",
      memberName: "meme",
      description: "Gives a random meme",
    });
  }
  async run(message) {
    const res = await fetch("https://memes.blademaker.tv/api")
      .then((response) => response.json())
      .then((data) => data);
    const embed = new MessageEmbed()
      .setColor("#0c0507")
      .setTitle(res.title)
      .setImage(res.image);
    await message.say(embed);
  }
};
