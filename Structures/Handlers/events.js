/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File:
 *   DiscordBot/Structures/Handlers/event.js
 *Author:
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github:
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 04:20:40 PM [GMT]
 *
 *Description:
 *   <Todo>
 *
 *Dependencies:
 *   <None>
 **/

async function loadEvents(client) {
    const { loadFiles } = require('../Functions/fileLoader');
    const Ascii = require('ascii-table');
    const Table = new Ascii().setHeading('Events', 'Status');

    await client.events.clear();

    const Files = await loadFiles('Events');

    Files.forEach((file) => {
        const event = require(file);
        if (!event.path) return Table.addRow(event.name, '🔴 FAILED Missing a path.');

        const execute = (...args) => event.execute(...args, client);
        client.events.set(event.name, execute);
        if (event.rest) {
            if (event.once) {
                client.rest.once(event.name, execute);
            } else {
                client.rest.on(event.name, execute);
            }
        } else {
            if (event.once) {
                client.once(event.name, execute);
            } else {
                client.on(event.name, execute);
            }
        }

        Table.addRow(event.path, '🔵 SUCCESSFUL');
    });
    console.log(Table.toString(), `\nLoaded Events.`);
}

module.exports = { loadEvents };
