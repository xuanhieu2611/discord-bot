require('dotenv').config()

const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require('discord.js');
const specialName = require('./SpecialName')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ]
});

client.on('ready', () => {
    console.log('Our bot is ready to go');
    client.user.setActivity({
        name: 'Your Mệnh Lệnh',
        type: ActivityType.Listening
    })
});

const IGNORE_PREFIX = "!"
const CHANNEL = ['898124509507366942']

client.on('messageCreate', async (msg) => {
    if (msg.author.bot) return;
    if (msg.content.startsWith(IGNORE_PREFIX)) return;
    if (!CHANNEL.includes(msg.channelId) && !msg.mentions.users.has(client.user.id)) return;

    const message = msg.content.trimStart().toLowerCase(); // Get message from user's input

    // Process Special Name
    const res_specialName = specialName(message);
    if (res_specialName != ''){
        msg.channel.send(res_specialName);
        return;
    }

    // Process build for champions
    if (message.startsWith('build')){
        const character = message.slice(6);
        msg.channel.send(`https://www.op.gg/champions/${character}/build?region=kr`);
        return;
    }

    // Profile view
    if (message.startsWith('profile')){
        let name = message.slice(8);
        name = name.replaceAll(' ','%20');
        name = name.replace('#','-');
        msg.channel.send(`https://www.op.gg/summoners/na/${name}`)
        return;
    }

    // Otherwise
    msg.channel.send('Tôi không biết 😞')
})

client.login(process.env.BOT_TOKEN);