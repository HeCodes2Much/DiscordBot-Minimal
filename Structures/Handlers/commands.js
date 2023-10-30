/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File:
 *   DiscordBot/Structures/Handlers/commands.js
 *Author:
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github:
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 06:53:43 PM [GMT]
 *
 *Description:
 *   <Todo>
 *
 *Dependencies:
 *   <None>
 **/

async function loadCommands(client) {
    const { REST, Routes } = require('discord.js');
    const { Token, ClientID, botsGuildID } = require('../../Structures/config.json');
    const { loadFiles } = require('../Functions/fileLoader');
    const betterlog = require('betterlog.js');
    const Ascii = require('ascii-table');
    const Table = new Ascii().setHeading('Commands', 'Status');

    await client.commands.clear();

    const Files = await loadFiles('Commands');
    Files.forEach((file) => {
        const command = require(file);

        if (!command.data.name) return Table.addRow(command.data.path, '🔴 FAILED Missing a name.');

        if (!command.data.path) return Table.addRow(command.data.path, '🔴 FAILED Missing a path.');

        if (!command.data.type && !command.data.description)
            return Table.addRow(command.path, '🔴 FAILED Missing a description.');

        client.commands.set(command.data.name, command);
        if (command.data.developer) {
            client.commandDevArray.push(command.data.toJSON());
            Table.addRow(command.data.path, '🟢 SUCCESSFUL');
        } else {
            client.commandArray.push(command.data.toJSON());
            Table.addRow(command.data.path, '🔵 SUCCESSFUL');
        }
    });
    console.log(Table.toString(), `\nLoaded Commands.`);

    const rest = new REST({ version: '10' }).setToken(Token);
    // await rest.put(Routes.applicationCommands(ClientID), { body: [] });

    try {
        await rest.put(Routes.applicationCommands(ClientID), {
            body: client.commandArray,
        });
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        betterlog.error(error);
    }

    // await rest.put(Routes.applicationGuildCommands(ClientID, botsGuildID), { body: [] });

    try {
        await rest.put(Routes.applicationGuildCommands(ClientID, botsGuildID), {
            body: client.commandDevArray,
        });
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        betterlog.error(error);
    }
}

module.exports = { loadCommands };
