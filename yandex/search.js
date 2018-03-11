const got = require('got')
const config = require('../config')

const url = 'https://yandex.com/search/xml'

async function search(query) {
  try {
    const user = process.env.YANDEX_USER || config.user
    const key = process.env.YANDEX_KEY || config.key
    return await got(url, {
      query: {
        user: user,
        key: key,
        query: query
      }
    })
  } catch (error) {
    throw error
  }
}

exports.search = search
