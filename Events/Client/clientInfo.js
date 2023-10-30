/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Events/Client/clientInfo.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Wed 11 October 2023, 07:00:01 PM [GMT+1]
 *
 *Description:
 *   Client Info Event for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, chalkm, cli-boxn, mongoose
 **/

const chalk = require('chalk');
const Box = require('cli-box');

const mongoose = require('mongoose');
const { Database } = require('../../Structures/config.json');

module.exports = {
    name: 'ready',
    path: 'Client/clientInfo.js',
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        function clientInfo(client) {
            const ClientBoxHeader = new Box(
                {
                    w: Math.floor(66),
                    h: 1,
                    stringify: false,
                    marks: {
                        nw: '╔',
                        n: '═',
                        ne: '╗',
                        e: '║',
                        se: '╝',
                        s: '═',
                        sw: '╚',
                        w: '║',
                    },
                    hAlign: 'middle',
                },
                'C L I E N T   I N F O R M A T I O N',
            ).stringify();

            const ClientBox = new Box(
                {
                    w: Math.floor(66),
                    h: 10,
                    stringify: false,
                    marks: {
                        nw: '╔',
                        n: '═',
                        ne: '╗',
                        e: '║',
                        se: '╝',
                        s: '═',
                        sw: '╚',
                        w: '║',
                    },
                    hAlign: 'middle',
                },
                `
${chalk.bold.blueBright('Client Details')} :: ${chalk.redBright(client.user.tag)}
${chalk.bold.blueBright('Guilds Count')} :: ${chalk.redBright(client.guilds.cache.size.toLocaleString())}
${chalk.bold.blueBright('Users Count')}:: ${chalk.redBright(client.users.cache.size.toLocaleString())}
${chalk.bold.blueBright('Chat Channels Count')}:: ${chalk.redBright(
                    client.channels.cache.filter((c) => c.type === 0).size.toLocaleString(),
                )}
${chalk.bold.blueBright('Voice Channels Count')}:: ${chalk.redBright(
                    client.channels.cache.filter((c) => c.type === 2).size.toLocaleString(),
                )}
${chalk.bold.blueBright('Commands Count')} :: ${chalk.redBright(client.commands.size.toLocaleString())}
${chalk.bold.blueBright('NodeJS Version')} :: ${chalk.redBright(process.version)}
${chalk.bold.blueBright('Discord.js Version')} :: ${chalk.redBright(require('discord.js').version)}
`,
            ).stringify();

            console.log(chalk.bold.greenBright(ClientBoxHeader));
            console.log(chalk.bold.greenBright(ClientBox));
        }

        clientInfo(client);

        if (!Database) return;
        mongoose
            .connect(Database, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                const DatabaseBoxHeader = new Box(
                    {
                        w: Math.floor(66),
                        h: 1,
                        stringify: false,
                        marks: {
                            nw: '╔',
                            n: '═',
                            ne: '╗',
                            e: '║',
                            se: '╝',
                            s: '═',
                            sw: '╚',
                            w: '║',
                        },
                        hAlign: 'middle',
                    },
                    'D A T A B A S E   I N F O R M A T I O N',
                ).stringify();

                const DatabaseBox = new Box(
                    {
                        w: Math.floor(66),
                        h: 3,
                        stringify: false,
                        marks: {
                            nw: '╔',
                            n: '═',
                            ne: '╗',
                            e: '║',
                            se: '╝',
                            s: '═',
                            sw: '╚',
                            w: '║',
                        },
                        hAlign: 'middle',
                    },
                    `
${chalk.bold.yellowBright('The client is now connected to the database!')}`,
                ).stringify();

                console.log(chalk.bold.greenBright(DatabaseBoxHeader));
                console.log(chalk.bold.greenBright(DatabaseBox));
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
