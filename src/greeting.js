const {Message} = require('discord.js')

function Greeting(msg){
    if (msg.author.bot) return;
    if (msg.content.startsWith(IGNORE_PREFIX)) return;
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

    if (msg.content.includes('an')){
        msg.channel.send('Top 1 top 2 công viên!')
    }

    msg.channel.send('Tôi không biết 😞')
}