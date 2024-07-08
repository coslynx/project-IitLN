const Discord = require('discord.js');
const { Wit, log } = require('node-wit');
const client = new Discord.Client();
const witClient = new Wit({ accessToken: 'YOUR_WIT_AI_ACCESS_TOKEN' });

client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith('!ask')) {
    const question = message.content.slice(5);
    
    witClient.message(question, {})
      .then(data => {
        const response = data.intents[0].name;
        message.channel.send(`AI Chatbot response: ${response}`);
      })
      .catch(error => {
        console.error('Error processing message:', error);
        message.channel.send('An error occurred while processing your question.');
      });
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');