const PhiDiscordBot = require("./struct/PhiDiscordBot");
const { ownerID, serverInvite } = require("./config.json");

const client = new PhiDiscordBot({
  owner: ownerID,
  invite: serverInvite,
});

client.start();
