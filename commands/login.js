exports.run = (client, message) => {
  message.channel.sendMessage(`LOGIN | PLEASE WAIT . . .`)
    .then(msg => {
      msg.edit(':white_check_mark: | **Duh, I am already logged-in try `g!galaxy`**');
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'login',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
