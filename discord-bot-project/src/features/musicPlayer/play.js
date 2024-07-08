const { Client, Intents } = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is ready');
});

const queue = new Map();

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!play')) return;

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
    };

    if (!queue.has(message.guild.id)) {
        queue.set(message.guild.id, { voiceChannel, textChannel: message.channel, connection: null, songs: [] });
        queue.get(message.guild.id).songs.push(song);

        try {
            const connection = await voiceChannel.join();
            queue.get(message.guild.id).connection = connection;
            play(message.guild, queue.get(message.guild.id).songs[0]);
        } catch (err) {
            console.error(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        queue.get(message.guild.id).songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
    }
});

const play = async (guild, song) => {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on('finish', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    
    dispatcher.setVolumeLogarithmic(5 / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
};

client.login('your-bot-token');