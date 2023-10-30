/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File :
 *   DiscordBot/Structures/Handlers/buttons.js
 *Author :
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github :
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Sat 19 March 2022, 04:18:23 AM [GMT]
 *Modified:
 *   Mon 30 October 2023, 04:03:02 PM [GMT]
 *
 *Description:
 *   Button Handler for HeCodes2Much
 *
 *Dependencies:
 *   node, npm, discord.js,
 **/

async function loadButtons(client) {
    const { loadFiles } = require('../Functions/fileLoader');
    const Ascii = require('ascii-table');
    const Table = new Ascii().setHeading('Buttons', 'Status');

    await client.buttons.clear();

    const Files = await loadFiles('Buttons');

    Files.forEach((file) => {
        const buttons = require(file);
        if (!buttons.path) return Table.addRow(buttons.name, '🔴 FAILED Missing a path.');
        if (!buttons.id) return;

        client.buttons.set(buttons.id, buttons);
        Table.addRow(buttons.path, '🔵 SUCCESSFUL');
    });
    console.log(Table.toString(), `\nLoaded Buttons`);
}

module.exports = { loadButtons };
