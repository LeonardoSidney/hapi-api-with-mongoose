const expect = require('chai').expect;
const establishmentMock = require('../../mocks/establishments.json');
const establishment = require('../../lib/establishment');
const mongoConnect = require('../../server/mongooseConnection').mongoConnect
const mongoClose = require('../../server/mongooseConnection').mongoClose
const utils = require('../../lib/common').utils

describe('Establishment test', function () {
  let establishmentCreated = null
  before(async () => {
    await mongoConnect()
  })
  it('list all establishments', async () => {
    const response = await establishment.index()
    expect(response).to.be.an('array')
  })
  it('create an new establishment', async () => {
    const responseCreate = await establishment.create(establishmentMock)
    establishmentCreated = responseCreate
    expect(responseCreate).to.have.property('_id')
  })
  it('list establishment created', async () => {
    const response = await establishment.list(establishmentCreated._id)
    expect(response).to.have.property('_id')
  })
  it('update establishment created', async () => {
    const response = await establishment.update(establishmentCreated)
    expect(response.modifiedCount).equal(1)
  })
  it('delete establishment created', async () => {
    const response = await establishment.delete(establishmentCreated._id)
    expect(response.deletedCount).equal(1)
  })
  after(async () => {
    mongoClose()
  })
})
