const { vk: { vkApi, Markup } } = require('../services');
const { User } = require('../models');

module.exports = async (ctx)=> {
  try {
    const data = await vkApi('users.get', {
      user_ids: ctx.message.user_id,
      fields: 'sex'
    });

    const user = await User.findOne({ vkId: data.response[0].id });

    if (!user) {
      const newUser = new User({
        vkId: data.response[0].id,
        firstName: data.response[0].first_name,
        lastName: data.response[0].last_name,
        sex: data.response[0].sex
      });
      await newUser.save();
    }

    await ctx.reply('Нажмите на одну из кнопок', null,
      Markup.keyboard([
        [ Markup.button('Обо мне', 'primary') ],
        [
          Markup.button('Картинка', 'positive'),
          Markup.button('Другое', 'negative')
        ]
      ]));

  } catch (error) {
    console.log(error);
    await ctx.reply('Бот временно недоступен!');
  }
};
