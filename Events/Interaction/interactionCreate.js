/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Events/Interaction/interactionCreate.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Wed 11 October 2023, 07:02:57 PM [GMT+1]
 *
 *Description:
 *   interactionCreate Event for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js,
 **/

const { Client, CommandInteraction, EmbedBuilder } = require('discord.js');
const { red } = require('../../Structures/colors.json');
const { botsDevID } = require('../../Structures/config.json');

module.exports = {
    name: 'interactionCreate',
    path: 'Interaction/interactionCreate.js',
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const { guildId, guild, user, member } = interaction;
        if (!interaction.guild)
            return (
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(red)
                            .setDescription('🟥 Sorry slash commands only works in guilds.')
                            .setTimestamp(),
                    ],
                }) && client.commands.delete(interaction.commandName)
            );
        if (!interaction.channel)
            return (
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(red)
                            .setDescription('🟥 Sorry slash commands dont work in DM.')
                            .setTimestamp(),
                    ],
                }) && client.commands.delete(interaction.commandName)
            );

        if (client.maintenance && interaction.user.id != botsDevID) {
            const Response = new EmbedBuilder()
                .setTitle('👷‍♂️ MAINTENANCE 👷‍♂️')
                .setDescription('Sorry the bot will be back shortly when everything is working correctly.')
                .setColor(red);

            return interaction.reply({ embeds: [Response] });
        }

        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command)
                return (
                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(red)
                                .setDescription('🟥 An error occurred while running this command.')
                                .setTimestamp(),
                        ],
                    }) && client.commands.delete(interaction.commandName)
                );
            command.execute(interaction, client);
        }
    },
};
