const got = require('got');
const config = require('../config')

const url = 'https://yandex.com/search/xml'

async function search(query) {
  try {
    const user = process.env.YANDEX_USER || config.user
    const key = process.env.YANDEX_KEY || config.key
    const response = await got(`${url}?user=${user}&key=${key}&query=${query}`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

exports.search = search
