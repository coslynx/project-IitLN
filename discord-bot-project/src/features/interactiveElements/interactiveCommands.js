import { Client, Message } from 'discord.js';

export default {
  name: 'interactiveCommands',
  description: 'Handle interactive commands for user interaction',
  execute(message: Message, client: Client) {
    if (message.content === 'ping') {
      message.reply('Pong!');
    } else if (message.content === 'hello') {
      message.reply('Hello!');
    } else {
      message.reply('Invalid command. Please try again.');
    }
  },
};