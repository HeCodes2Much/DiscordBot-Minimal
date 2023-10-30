const { ShardingManager } = require('discord.js');
const { Token } = require('./config.json');
const Ascii = require('ascii-table');

let manager = new ShardingManager('./Structures/index.js', {
    token: Token,
    shardList: 'auto',
    totalShards: 'auto',
});

manager.on('shardCreate', (shard) => {
    const Table = new Ascii('Shards Loaded');
    Table.addRow(`Launched Shard ${shard.id}`, '🟢 SUCCESSFUL');
    console.log(Table.toString());
});

manager.spawn();
