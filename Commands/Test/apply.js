/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Commands/Test/apply.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 06:49:12 PM [GMT]
 *
 *Description:
 *   Apply Command for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js
 **/

const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
} = require('discord.js');
const ms = require('ms');

const command = new SlashCommandBuilder()
    .setName('apply')
    .setDescription('Apply for staff position.')
    .addStringOption((option) =>
        option
            .setName('position')
            .setDescription('Reasoning why you went afk.')
            .addChoices({ name: 'Moderator', value: 'Moderator' }, { name: 'Developer', value: 'Developer' })
            .setRequired(true),
    );

// Add a custom 'variables' property to the command
command.path = 'Test/apply.js';
command.developer = false;
command.cooldown = ms('5m');

module.exports = {
    data: command,
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
        const position = interaction.options.getString('position');

        const modal = new ModalBuilder().setCustomId('modal').setTitle('Modal Title');

        let age = '';
        let answer = '';
        let hours = '';
        let experience = '';
        let contribute = '';

        // Adding Components to Madal
        let ageText = '';
        let answerText = '';
        let hoursText = '';
        let experienceTest = '';
        let contributeTest = '';
        switch (position) {
            case 'Moderator':
                age = new TextInputBuilder()
                    .setCustomId('age')
                    .setLabel('What is your age?')
                    .setStyle(TextInputStyle.Short)
                    .setMinLength(2)
                    .setMaxLength(2)
                    .setPlaceholder('Must be 13 or above')
                    .setRequired(true);
                answer = new TextInputBuilder()
                    .setCustomId('answer')
                    .setLabel('Why do you want to be a Moderator?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);
                hours = new TextInputBuilder()
                    .setCustomId('hours')
                    .setLabel('How many hours you can moderate?')
                    .setStyle(TextInputStyle.Short)
                    .setMinLength(2)
                    .setMaxLength(2)
                    .setPlaceholder('How many hours you can moderate?')
                    .setRequired(true);
                experience = new TextInputBuilder()
                    .setCustomId('experience')
                    .setLabel('Do you have any past experience?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);
                contribute = new TextInputBuilder()
                    .setCustomId('contribute')
                    .setLabel('What can you contribute to the staff team?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);

                // Adding Components to Madal
                ageText = new ActionRowBuilder().addComponents(age);
                answerText = new ActionRowBuilder().addComponents(answer);
                hoursText = new ActionRowBuilder().addComponents(hours);
                experienceTest = new ActionRowBuilder().addComponents(experience);
                contributeTest = new ActionRowBuilder().addComponents(contribute);

                modal
                    .setCustomId('mod_application')
                    .setTitle('Moderator Application')
                    .addComponents(ageText, answerText, hoursText, experienceTest, contributeTest);

                await interaction.showModal(modal);
                break; // Exit the switch statement after showing the Moderator modal

            case 'Developer':
                age = new TextInputBuilder()
                    .setCustomId('age')
                    .setLabel('What is your age?')
                    .setStyle(TextInputStyle.Short)
                    .setMinLength(2)
                    .setMaxLength(2)
                    .setPlaceholder('Must be 13 or above')
                    .setRequired(true);
                answer = new TextInputBuilder()
                    .setCustomId('answer')
                    .setLabel('Why do you want to be a Moderator?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);
                hours = new TextInputBuilder()
                    .setCustomId('hours')
                    .setLabel('How many hours you can moderate?')
                    .setStyle(TextInputStyle.Short)
                    .setMinLength(2)
                    .setMaxLength(2)
                    .setPlaceholder('How many hours you can moderate?')
                    .setRequired(true);
                experience = new TextInputBuilder()
                    .setCustomId('experience')
                    .setLabel('Do you have any past experience?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);
                contribute = new TextInputBuilder()
                    .setCustomId('contribute')
                    .setLabel('What can you contribute to the staff team?')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMinLength(15)
                    .setMaxLength(200)
                    .setPlaceholder('Answer in 15 - 200 chars.')
                    .setRequired(true);

                // Adding Components to Madal
                ageText = new ActionRowBuilder().addComponents(age);
                answerText = new ActionRowBuilder().addComponents(answer);
                hoursText = new ActionRowBuilder().addComponents(hours);
                experienceTest = new ActionRowBuilder().addComponents(experience);
                contributeTest = new ActionRowBuilder().addComponents(contribute);

                modal
                    .setCustomId('dev_application')
                    .setTitle('Developer Application')
                    .addComponents(ageText, answerText, hoursText, experienceTest, contributeTest);

                await interaction.showModal(modal);
                break; // Exit the switch statement after showing the Developer modal
        }
    },
};
