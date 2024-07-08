const Discord = require('discord.js');

function createPoll(channel, question, options) {
    if (options.length < 2 || options.length > 9) {
        return 'Please provide between 2 and 9 options for the poll.';
    }

    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Poll')
        .setDescription(question);

    options.forEach((option, index) => {
        embed.addField(`Option ${index + 1}`, option);
    });

    channel.send(embed)
        .then(message => {
            options.forEach((_, index) => {
                message.react(getEmoji(index + 1));
            });
        });

    return 'Poll created successfully!';
}

function getEmoji(index) {
    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
    return emojis[index - 1];
}

module.exports = {
    createPoll
};