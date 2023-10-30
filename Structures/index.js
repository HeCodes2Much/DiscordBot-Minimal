// -*-coding:utf-8 -*-
// -------------------------------------------------------------------------
// Path          - DiscordBot/Structure/index.js
// Git           - https://github.com/HeCodes2Much
// Author        - HeCodes2Much [wayne6324@gmail.com]
// Start On      - Wed 23 February 2022, 12:04:54 pm (GMT)
// Modified On   - Sat 12 March 2022, 11:52:32 am (GMT)
// -------------------------------------------------------------------------
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, GuildPresences } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, GuildPresences],
    partials: [User, Message, GuildMember, ThreadMember],
});
const { Token } = require('./config.json');

const { loadButtons } = require('../Structures/Handlers/buttons');
const { loadCommands } = require('../Structures/Handlers/commands');
const { loadEvents } = require('../Structures/Handlers/events');
const { loadModals } = require('../Structures/Handlers/modals');

// Handler Collections
client.buttons = new Collection();
client.events = new Collection();
client.commands = new Collection();
client.subcommands = new Collection();
client.modals = new Collection();

// Command Arrays
client.commandArray = [];
client.commandDevArray = [];

loadButtons(client);
loadCommands(client);
loadEvents(client);
loadModals(client);

client.login(Token).catch((err) => console.log(err));

module.exports = client;
