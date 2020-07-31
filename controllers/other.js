const { vk: { Markup } } = require('../services');

module.exports = async (ctx)=> {
  try {
    await ctx.reply('Выбирите одну из кнопок:', null, Markup.keyboard(['Инлаиновая кнопка 1', 'Инлаиновая кнопка 2']).inline());
  } catch (error) {
    console.log(error);
    await ctx.reply('Бот временно недоступен!');
  }
};
