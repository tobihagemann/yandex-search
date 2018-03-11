const convert = require('xml-js');
const yandexSearch = require('./search')

async function search(req, res) {
  try {
    const params = req.query
    const yandexRes = await yandexSearch.search(params.query)
    const xml = yandexRes.body
    const json = convert.xml2js(xml, { compact: true, nativeType: true })
    res.status(yandexRes.statusCode)
    return res.send(JSON.stringify(json))
  } catch (error) {
    res.status(error.statusCode || 500)
    return res.send(error.response.body)
  }
}

exports.search = search
