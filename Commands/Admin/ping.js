/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Commands/Admin/ping.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Sat 30 September 2023, 09:05:35 PM [GMT+1]
 *
 *Description:
 *   Ping Command for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js, ms
 **/

const {
    Client,
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
    PermissionsBitField,
} = require('discord.js');
const ms = require('ms');

const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot to get a Pong.')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator);

// Add a custom 'variables' property to the command
command.path = 'Admin/ping.js';
command.developer = false;
command.cooldown = ms('5m');

module.exports = {
    data: command,

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client) {
        const uptime = client.uptime;
        const uptime_seconds = Math.floor(uptime / 1000);
        const seconds = uptime_seconds % 60;
        const uptime_minutes = Math.floor(uptime_seconds / 60);
        const minutes = uptime_minutes % 60;
        const uptime_hours = Math.floor(uptime_minutes / 60);
        const hours = uptime_hours % 24;
        const days = Math.floor(uptime_hours / 24);

        const ping_embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(':ping_pong: Pong!')
            .addFields(
                {
                    name: '`Bot Latency`',
                    value: `${new Date().getTime() - interaction.createdTimestamp} ms`,
                },
                {
                    name: '`API Latency`',
                    value: `${Math.round(client.ws.ping)} ms`,
                },
                {
                    name: '`Bot Uptime`',
                    value: `${days} Days, ${hours} Hrs, ${minutes} Min, ${seconds} Sec`,
                },
            );

        interaction.reply({ embeds: [ping_embed] });
    },
};
