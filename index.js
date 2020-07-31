
const { vk: { bot } } = require('./services');
require('./router');

bot.startPolling();
