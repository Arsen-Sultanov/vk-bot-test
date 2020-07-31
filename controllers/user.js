const { User } = require('../models');

module.exports = async (ctx)=> {
  try {
    const user = await User.findOne({ vkId: ctx.message.user_id });
    const sex = user.sex === 0 ? 'В вашем профиле не указан пол' :
      user.sex === 1 ? 'Женьщина' : 'Мужчина';

    if (user) {
      await ctx.reply(`${user.firstName} ${user.lastName}, ${sex}`);
      return;
    }

    await ctx.reply('По какойто причине о вас нет данных!');
  } catch (error) {
    console.log(error);
    await ctx.reply('Бот временно недоступен!');
  }
};
