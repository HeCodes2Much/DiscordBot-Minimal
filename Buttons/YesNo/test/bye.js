const { PermissionsBitField } = require('discord.js');

module.exports = {
    id: 'Bye',
    path: 'Admin/test/bye.js',
    ownerOnly: true,
    permission: PermissionsBitField.Flags.Administrator,
    execute(interaction) {
        interaction.reply({ content: 'Bye Yayyy its working', ephemeral: true });
    },
};
