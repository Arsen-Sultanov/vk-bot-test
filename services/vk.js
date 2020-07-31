const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const api = require('node-vk-bot-api/lib/api');
const { vk } = require('../config');

const bot = new VkBot(vk.token);

const vkApi = async (methods, body)=> {
  try {
    const data = api(methods, {
      ...body,
      access_token: vk.token
    });
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  bot,
  vkApi,
  Markup
};
