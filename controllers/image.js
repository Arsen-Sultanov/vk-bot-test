const { vk: { bot } } = require('../services');

module.exports = async (ctx)=> {
  try {
    await bot.sendMessage(ctx.message.user_id, 'Картинка:', 'photo-197550241_457239017');
  } catch (error) {
    console.log(error);
    await ctx.reply('Бот временно недоступен!');
  }
};
