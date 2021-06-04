const { CommandoClient } = require('discord.js-commando');
const path = require('path');

require('dotenv').config();
const config = require('./config.json');

const client = new CommandoClient({
	commandPrefix: config.prefix || '>',
	owner: config.ownerID,
	invite: config.serverInvite
});

client.on('ready', async () => {
	console.log(`I have logged in as ${client.user.tag} (id: ${client.user.id})`);

	client.registry
		.registerDefaultTypes()
		.registerGroups([
			['util', 'Basic utility commands'],
			['mod', 'Moderation commands such as ban, kick']
		])
		.registerCommandsIn(path.join(__dirname, 'commands'));
});

client.login(process.env.TOKEN);