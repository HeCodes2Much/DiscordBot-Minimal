/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File:
 *   DiscordBot/Structures/Functions/fileLoader.js
 *Author:
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github:
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Mon 30 October 2023, 03:16:55 PM [GMT]
 *Modified:
 *   Mon 30 October 2023, 06:34:20 PM [GMT]
 *
 *Description:
 *   <Todo>
 *
 *Dependencies:
 *   <None>
 **/

const { glob } = require('glob');
const { promisify } = require('util');
const proGlob = promisify(glob);

async function loadFiles(dirName) {
    const Files = await proGlob(`${process.cwd().replace(/\\/g, '/')}/${dirName}/**/*.js`);
    Files.forEach((file) => delete require.cache[require.resolve(file)]);
    return Files;
}

module.exports = { loadFiles };
