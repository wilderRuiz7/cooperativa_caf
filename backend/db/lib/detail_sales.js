'use strict'

function setupDetail_Sale(detail_saleModel) {
  async function createDetail_Sale(detail_sale) {
    const result = await detail_saleModel.create(detail_sale)
    return result.toJSON()
  }
  async function updateDetail_Sale(uuid, detail_sale) {
    const cond = { where : { uuid } }
    const result = await detail_saleModel.update(detail_sale, cond)
    return result ? detail_saleModel.findOne(cond) : new Error('No se actualizo ninguna venta ')
  }
  async function deleteDetail_Sale(uuid) {
    const cond = { where : { uuid } }
    const result = await detail_saleModel.destroy( cond)
    return result ? true : false
  }
  function findDetail_Sale() {
    return detail_saleModel.findAll()
  }
  function findDetail_SaleUuid(uuid) {
    const cond = { where : { uuid } }
    return detail_saleModel.findOne(cond)
  }
  return {
    createDetail_Sale,
    updateDetail_Sale,
    deleteDetail_Sale,
    findDetail_Sale,
    findDetail_SaleUuid
  }
}

module.exports = setupDetail_Sale