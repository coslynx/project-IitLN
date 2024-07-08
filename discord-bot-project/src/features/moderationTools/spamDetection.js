const Discord = require('discord.js');

const spamDetection = (client) => {
  const spamMap = new Map();

  client.on('messageCreate', (message) => {
    const { author, content, guild } = message;

    if (author.bot) return;

    const spamLimit = 5; // Define the limit for consecutive messages
    const spamInterval = 5000; // Define the interval in milliseconds

    const spamKey = `${guild.id}-${author.id}`;
    const currTime = Date.now();

    if (spamMap.has(spamKey)) {
      const { lastMessage, spamCount } = spamMap.get(spamKey);

      if (currTime - lastMessage < spamInterval) {
        spamMap.set(spamKey, { lastMessage: currTime, spamCount: spamCount + 1 });

        if (spamCount + 1 >= spamLimit) {
          message.delete();
          message.channel.send(`${author}, please refrain from spamming.`)
            .then((msg) => {
              setTimeout(() => {
                msg.delete();
              }, 5000);
            });
        }
      } else {
        spamMap.set(spamKey, { lastMessage: currTime, spamCount: 1 });
      }
    } else {
      spamMap.set(spamKey, { lastMessage: currTime, spamCount: 1 });
    }

    setTimeout(() => {
      spamMap.delete(spamKey);
    }, spamInterval);
  });
};

module.exports = spamDetection;