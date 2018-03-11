const convert = require('xml-js')
const yandexSearch = require('./search')

async function search(req, res) {
  try {
    const params = req.query
    const yandexRes = await yandexSearch.search(params.query)
    const xml = yandexRes.body
    const json = convert.xml2js(xml, { compact: true, nativeType: true })
    return createResponse(res, yandexRes.statusCode, JSON.stringify(json))
  } catch (error) {
    return createResponse(res, error.statusCode || 500, error.response.body)
  }
}

function createResponse(res, status, body) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.status(status)
  return res.send(body)
}

exports.search = search
