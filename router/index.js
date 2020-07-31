const { vk: { bot } } = require('../services');
const { start, user, image, other } = require('../controllers');

bot.command('Начать', start);
bot.command('Обо мне', user);
bot.command('Картинка', image);
bot.command('Другое', other);
