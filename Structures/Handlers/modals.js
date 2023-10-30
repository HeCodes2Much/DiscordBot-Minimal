/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File:
 *   DiscordBot/Structures/Handlers/modals.js
 *Author:
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github:
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Wed 23 February 2022, 12:04:54 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 06:04:36 PM [GMT]
 *
 *Description:
 *   <Todo>
 *
 *Dependencies:
 *   <None>
 **/

async function loadModals(client) {
    const { loadFiles } = require('../Functions/fileLoader');
    const Ascii = require('ascii-table');
    const Table = new Ascii().setHeading('Modals', 'Status');

    await client.modals.clear();

    const Files = await loadFiles('Events/Modals');

    Files.forEach((file) => {
        const modals = require(file);

        const execute = (...args) => modals.execute(...args, client);
        client.modals.set(modals.name, execute);
        if (modals.rest) {
            if (modals.once) {
                client.rest.once(modals.name, execute);
            } else {
                client.rest.on(modals.name, execute);
            }
        } else {
            if (modals.once) {
                client.once(modals.name, execute);
            } else {
                client.on(modals.name, execute);
            }
        }

        Table.addRow(modals.path, '🔵 SUCCESSFUL');
    });
    console.log(Table.toString(), `\nLoaded Modals.`);
}

module.exports = { loadModals };
