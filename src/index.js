require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')

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
});

const IGNORE_PREFIX = "!"
const CHANNEL = ['898124509507366942']

client.on('messageCreate', async (msg) => {
    if (msg.author.bot) return;
    if (msg.content.startsWith('!')) return;
    if (!CHANNEL.includes(msg.channelId) && !msg.mentions.users.has(client.user.id)) return;

    if (msg.content.includes('xhiu')){
        msg.channel.send('xhiu dep trai!');
        return;
    }

    if (msg.content.includes('vinh')) {
        msg.channel.send('vinh đù!');
        return;
    }

    if (msg.content.includes('thang')) {
        msg.channel.send('thang đù!');
        return;
    }

    if (msg.content.includes('hien')) {
        msg.channel.send('hiển ngu!');
        return;
    }

    msg.channel.send('Tôi không biết 😞')
})

client.login(process.env.BOT_TOKEN);