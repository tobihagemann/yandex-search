const express = require('express')
const config = require('./config')
const yandex = require('./yandex')

const app = express()

start()

function start() {
  const port = process.env.PORT || config.port || 3000

  app.get('/search', yandex.search)

  app.listen(port, () => console.log(`Listening on port ${port}`))
}
