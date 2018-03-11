const convert = require('xml-js');
const yandexSearch = require('./search')

async function search(req, res) {
  const params = req.query
  const xml = await yandexSearch.search(params.query)
  const json = convert.xml2js(xml, { compact: true, nativeType: true })
  return res.send(JSON.stringify(json))
}

exports.search = search
