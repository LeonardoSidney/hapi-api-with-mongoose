const mongoose = require('mongoose')
const { Schema } = mongoose

const addressFields = {
  cep: String,
  street: String,
  neighborhood: String,
  city: String,
  uf: String,
}

const establishmentFields = {
  name: String,
  company_name: String,
  document: String,
  address: addressFields,
}

const establishmentOptions = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false,
}

const establishmentSchema = new Schema(establishmentFields, establishmentOptions)

const Establishment = mongoose.model('Establishment', establishmentSchema)

module.exports = Establishment
