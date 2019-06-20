'use strict'

function setupSale(saleModel) {
  async function createSale(sale) {
    const result = await saleModel.create(sale)
    return result.toJSON()
  }
  async function updateSale(uuid, sale) {
    const cond = { where : { uuid } }
    const result = await saleModel.update(sale, cond)
    return result ? saleModel.findOne(cond) : new Error('No se actualizo ninguna venta ')
  }
  async function deleteSale(uuid) {
    const cond = { where : { uuid } }
    const result = await saleModel.destroy( cond)
    return result ? true : false
  }
  function findSale() {
    return saleModel.findAll()
  }
  function findSaleUuid(uuid) {
    const cond = { where : { uuid } }
    return saleModel.findOne(cond)
  }
  return {
    createSale,
    updateSale,
    deleteSale,
    findSale,
    findSaleUuid
  }
}

module.exports = setupSale