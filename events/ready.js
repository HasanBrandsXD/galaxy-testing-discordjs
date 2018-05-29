const config = require('../settings.json');

module.exports = client => {
  console.log('Bot was sucessully started. \n[LOGS] Connected & recieving to discordbots.org/api  | Sending shard counts - Updating every hour')
  client.user.setGame(`maintenance, pls wait.`);
};
