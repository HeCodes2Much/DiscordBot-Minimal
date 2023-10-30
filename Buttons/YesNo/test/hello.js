const { PermissionsBitField } = require('discord.js');

module.exports = {
    id: 'Hello',
    path: 'Admin/test/hello.js',
    ownerOnly: true,
    permission: PermissionsBitField.Flags.Administrator,
    execute(interaction) {
        interaction.reply({ content: 'Hello Yayyy its working', ephemeral: true });
    },
};
