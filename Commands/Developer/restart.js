/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Commands/Developer/restart.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Sat 07 October 2023, 03:31:05 PM [GMT+1]
 *
 *Description:
 *   Restart Command for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js, config.json
 **/

const {
    ChatInputCommandInteraction,
    Client,
    EmbedBuilder,
    SlashCommandBuilder,
    PermissionsBitField,
} = require('discord.js');
const { Token, ownerIDS } = require('../../Structures/config.json');
const { purple } = require('../../Structures/colors.json');
const ms = require('ms');

const command = new SlashCommandBuilder()
    .setName('restart')
    .setDescription('Restart the Bot.')
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator);

// Add a custom 'variables' property to the command
command.path = 'Developer/restart.js';
command.developer = true;
command.cooldown = ms('5m');

module.exports = {
    data: command,
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const { guild, member } = interaction;
        if (!ownerIDS.includes(member.id)) {
            return interaction.reply({
                content: 'You do not have permission to restart this bot',
            });
        }
        await interaction
            .reply({ content: 'Restarting...', ephemeral: true })
            .then(() => {
                client.destroy();
                console.log(`[Client] Restarting by ${member.user.username} in ${guild.name}`);
            })
            .then(() => {
                client.login(Token).catch((err) => console.log(err));
                console.log('[Client] Ready');
                for (var i = 0; i < ownerIDS.length; i++) {
                    var owner = client.users.cache.get(ownerIDS[i]);

                    owner.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(purple)
                                .setTitle('[Client] Restarted by')
                                .setDescription(`${member.user.username} in ${guild.name}`),
                        ],
                    });
                }
            });
    },
};
