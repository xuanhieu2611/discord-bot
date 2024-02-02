require('dotenv').config()

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { default: Greeting } = require('./greeting');

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

    const message = msg.content.trimStart().toLowerCase();

    if (message.includes('xhiu')){
        msg.channel.send('xhiu dep trai!');
        return;
    }

    if (message.includes('vinh')) {
        msg.channel.send('vinh đù!');
        return;
    }

    if (message.includes('thang')) {
        msg.channel.send('thang đù!');
        return;
    }

    if (message.includes('hien')) {
        msg.channel.send('hiển ngu!');
        return;
    }

    if (message.includes('an')){
        msg.channel.send('Top 1 top 2 công viên!')
        return;
    }

    if (message.startsWith('build')){
        const character = message.slice(6);
        msg.channel.send(`https://www.op.gg/champions/${character}/build?region=kr`);
        return;
    }

    if (message.startsWith('profile')){
        let name = message.slice(8);
        name = name.replaceAll(' ','%20');
        name = name.replace('#','-');
        msg.channel.send(`https://www.op.gg/summoners/na/${name}`)
        return;
    }

    msg.channel.send('Tôi không biết 😞')
})

client.login(process.env.BOT_TOKEN);