'use strict'

function setupTip(tipModel) {
  async function createTip(tip) {
    const result = await tipModel.create(tip)
    return result.toJSON()
  }
  async function updateTip(uuid, tip) {
    const cond = { where : { uuid } }
    const result = await tipModel.update(tip, cond)
    return result ? tipModel.findOne(cond) : new Error('No se actualizo ningun tips ')
  }
  async function deleteTip(uuid) {
    const cond = { where : { uuid } }
    const result = await tipModel.destroy( cond)
    return result ? true : false
  }
  function findTip() {
    return tipModel.findAll()
  }
  function findTipUuid(uuid) {
    const cond = { where : { uuid } }
    return tipModel.findOne(cond)
  }
  return {
    createTip,
    updateTip,
    deleteTip,
    findTip,
    findTipUuid
  }
}

module.exports = setupTip