const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!createPoll')) {
    const args = message.content.slice('!createPoll'.length).trim().split(',');
    const question = args[0];
    const options = args.slice(1);

    if (options.length < 2 || options.length > 9) {
      message.channel.send('Please provide between 2 to 9 options for the poll.');
      return;
    }

    const embed = new MessageEmbed()
      .setTitle('Poll')
      .setDescription(question)
      .setColor('#34c6eb');

    options.forEach((option, index) => {
      embed.addField(`Option ${index + 1}`, option);
    });

    const pollMessage = await message.channel.send({ embeds: [embed] });

    options.forEach((_, index) => {
      pollMessage.react(String.fromCharCode(0x31 + index));
    });
  }
});

client.login('your-bot-token');