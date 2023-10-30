/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Commands/Test/test.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 06:49:06 PM [GMT]
 *
 *Description:
 *   Test Command for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js
 **/

const {
    ChatInputCommandInteraction,
    Client,
    ActionRowBuilder,
    ButtonBuilder,
    SlashCommandBuilder,
    PermissionsBitField,
    ButtonStyle,
} = require('discord.js');
const ms = require('ms');

const command = new SlashCommandBuilder()
    .setName('test')
    .setDescription('Shows the latest changes in the bot..')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator);

// Add a custom 'variables' property to the command
command.path = 'Test/test.js';
command.developer = true;
command.cooldown = ms('5m');

module.exports = {
    data: command,

    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const row = new ActionRowBuilder();
        row.addComponents(
            new ButtonBuilder().setCustomId('Hello').setLabel('Hello').setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId('Bye').setLabel('Bye').setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId('Timeout').setLabel('Timeout').setStyle(ButtonStyle.Secondary),
        );

        interaction.reply({ components: [row], ephemeral: true });
    },
};
