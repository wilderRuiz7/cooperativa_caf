'use strict'

function setupProduct(productModel) {
  async function createProduct(product) {
    const result = await productModel.create(product)
    return result.toJSON()
  }
  async function updateProduct(uuid, product) {
    const cond = { where : { uuid } }
    const result = await productModel.update(product, cond)
    return result ? productModel.findOne(cond) : new Error('No se actualizo ningun registro')
  }
  async function deleteProduct(uuid) {
    const cond = { where : { uuid } }
    const result = await productModel.destroy( cond)
    return result ? true : false
  }
  function findProduct() {
    return productModel.findAll()
  }
  function findProductUuid(uuid) {
    const cond = { where : { uuid } }
    return productModel.findOne(cond)
  }
  return {
    createProduct,
    updateProduct,
    deleteProduct,
    findProduct,
    findProductUuid
  }
}

module.exports = setupProduct