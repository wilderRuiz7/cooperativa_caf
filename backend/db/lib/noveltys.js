'use strict'

function setupNovelty(noveltyModel) {
  async function createNovelty(novelty) {
    const result = await noveltyModel.create(novelty)
    return result.toJSON()
  }
  async function updateNovelty(uuid, novelty) {
    const cond = { where : { uuid } }
    const result = await noveltyModel.update(novelty, cond)
    return result ? noveltyModel.findOne(cond) : new Error('No se actualizo ninguna venta ')
  }
  async function deleteNovelty(uuid) {
    const cond = { where : { uuid } }
    const result = await noveltyModel.destroy( cond)
    return result ? true : false
  }
  function findNovelty() {
    return noveltyModel.findAll()
  }
  function findNoveltyUuid(uuid) {
    const cond = { where : { uuid } }
    return noveltyModel.findOne(cond)
  }
  return {
    createNovelty,
    updateNovelty,
    deleteNovelty,
    findNovelty,
    findNoveltyUuid
  }
}

module.exports = setupNovelty