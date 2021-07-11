const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class WhoIs extends Command {
  constructor(client) {
    super(client, {
      name: "whois",
      group: "util",
      memberName: "whois",
      description: "Gives information about a user",
    });
  }
  async run(message) {
    const { guild, channel } = message;
    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);
    const Embed = new MessageEmbed()
      .setAuthor(`User description for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: "User Tag",
          value: user.tag,
        },
        {
          name: "Is Bot?",
          value: user.bot,
        },
        {
          name: "NickName",
          value: member.nickname || "None",
        },
        {
          name: "Joined Server On:",
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: "Joined Discord On:",
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: "Roles",
          value: member.roles._roles.map((rolesData) => `<@&${rolesData.id}>`),
        },
        {
          name: "Highest Role",
          value: member.roles.highest,
        }
      )
      .setColor("#1ee0eb");

    await message.say(Embed);
  }
};
