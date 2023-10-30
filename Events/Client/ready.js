/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Events/Client/ready.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Wed 11 October 2023, 06:06:55 PM [GMT+1]
 *
 *Description:
 *   Ready Event for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js
 **/

const { Client, ActivityType } = require('discord.js');
const packageJson = require('../../package.json');

const projectVersion = packageJson.version;

module.exports = {
    name: 'ready',
    path: 'Client/ready.js',
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        require('./clientInfo');

        client.user.setPresence({
            activities: [
                {
                    name: `Development of ${client.user.username} v${projectVersion}`,
                    type: ActivityType.Custom,
                    url: 'https://twitch.tv/HeCodes2Much',
                },
            ],
            status: 'idle',
        });
    },
};
