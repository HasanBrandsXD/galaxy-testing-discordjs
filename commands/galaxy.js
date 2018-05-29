exports.run = (client, message) => {
  message.channel.sendMessage(`**Connecting to Galaxy's Database...`)
    .then(msg => {
      msg.edit(`:x: | **Hmm, seems like I could not login to the database, please login manually in the console.**`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'galaxy',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
