const Establishment = require('../models/Establishment.js');

const internals = {}

internals.index = async () => {
  const establishment = await Establishment.find()
  return establishment
}

internals.create = async (payload) => {
  const establishment = new Establishment(payload)
  const response = await establishment.save()
  return response
}

internals.list = async (id) => {
  const id_establishment = id;
  const establishment = await Establishment.findOne({_id: id_establishment})
  return establishment
}

internals.update = async (payload) => {
  const id_establishment = payload._id;
  const establishment = await Establishment.updateOne({_id: id_establishment}, payload)
  return establishment
}

internals.delete = async (payload) => {
  const id_establishment = payload._id;
  const establishment = await Establishment.deleteOne({_id: id_establishment})
  return establishment
}

module.exports = internals
