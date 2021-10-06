const establishment = require('../lib/establishment')

const handlers = {}

handlers.createEstablishmentHander = async (request, h) => {
  const payload = request.payload
  try {
    const response = await establishment.create(payload)
    return h.request({ _id: response._id }).code(201)
  } catch (error) {
    console.log('cant create establishment :>> ', error);
  }
}

handlers.updateEstablishmentHander = async (request, h) => {
  const payload = request.payload
  try {
    const response = await establishment.update(payload)
    return h.request({ _id: response._id }).code(200)
  } catch (error) {
    console.log('cant update establishment :>> ', error);
  }
}

module.exports = handlers
