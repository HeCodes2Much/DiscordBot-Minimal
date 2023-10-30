// -*-coding:utf-8 -*-
// -------------------------------------------------------------------------
// Path          - DiscordBot/Events/Modals/Application/mod_application.js
// Git           - https://github.com/HeCodes2Much
// Author        - HeCodes2Much [wayne6324@gmail.com]
// Start On      - Wed 23 February 2022, 12:04:54 pm (GMT)
// Modified On   - Wed 23 February 2022, 12:06:14 pm (GMT)
// -------------------------------------------------------------------------

const { ModalSubmitInteraction, EmbedBuilder, InteractionType } = require('discord.js');
const { green } = require('../../../Structures/colors.json');

/**
 * @param {ModalSubmitInteraction} interaction
 * @param {Client} client
 */
module.exports = {
    name: 'interactionCreate',
    path: 'Application/mod_application.js',
    async execute(interaction, client) {
        if (interaction.type === InteractionType.ModalSubmit) {
            if (interaction.customId === 'mod_application') {
                const age = interaction.fields.getTextInputValue('age');
                const answer = interaction.fields.getTextInputValue('answer');
                const hours = interaction.fields.getTextInputValue('hours');
                const experience = interaction.fields.getTextInputValue('experience');
                const contribute = interaction.fields.getTextInputValue('contribute');

                const embed = new EmbedBuilder()
                    .setColor(green)
                    .setTitle('Moderator Application Submission')
                    .setDescription(`Sent by <@${interaction.member.id}>`)
                    .addFields({ name: 'Age', value: `${age}`, inline: false })
                    .addFields({ name: 'Why do you want to be a Moderator?', value: `${answer}`, inline: false })
                    .addFields({ name: 'How many hours you can moderate?', value: `${hours}`, inline: false })
                    .addFields({ name: 'Do you have any past experience?', value: `${experience}`, inline: false })
                    .addFields({
                        name: 'What can you contribute to the staff team?',
                        value: `${contribute}`,
                        inline: false,
                    });

                const channel = interaction.guild.channels.cache.get(Data.commands.applyID);

                channel.send({ embeds: [embed] });

                interaction.reply({ content: 'Your application was successfully submitted.', ephemeral: true });
            }
            if (interaction.customId === 'dev_application') {
                const age = interaction.fields.getTextInputValue('age');
                const answer = interaction.fields.getTextInputValue('answer');
                const hours = interaction.fields.getTextInputValue('hours');
                const experience = interaction.fields.getTextInputValue('experience');
                const contribute = interaction.fields.getTextInputValue('contribute');

                const embed = new EmbedBuilder()
                    .setColor(green)
                    .setTitle('Developer Application Submission')
                    .setDescription(`Sent by <@${interaction.member.id}>`)
                    .addFields({ name: 'Age', value: `${age}`, inline: false })
                    .addFields({ name: 'Why do you want to be a Developer?', value: `${answer}`, inline: false })
                    .addFields({ name: 'How many hours you can moderate?', value: `${hours}`, inline: false })
                    .addFields({ name: 'Do you have any past experience?', value: `${experience}`, inline: false })
                    .addFields({
                        name: 'What can you contribute to the staff team?',
                        value: `${contribute}`,
                        inline: false,
                    });

                const channel = interaction.guild.channels.cache.get('1162335581586604072');

                channel.send({ embeds: [embed] });

                interaction.reply({ content: 'Your application was successfully submitted.', ephemeral: true });
            }
        }
    },
};
