'use strict'

function setupMarchinery(marchinerysModel) {
  async function createMarchinery(marchinerys) {
    const result = await marchinerysModel.create(marchinerys)
    return result.toJSON()
  }
  async function updateMarchinery(uuid, marchinerys) {
    const cond = { where : { uuid } }
    const result = await marchinerysModel.update(marchinerys, cond)
    return result ? marchinerysModel.findOne(cond) : new Error('No se actualizo ninguna maquinaria')
  }
  async function deleteMarchinery(uuid) {
    const cond = { where : { uuid } }
    const result = await marchinerysModel.destroy( cond)
    return result ? true : false
  }
  function findMarchinery() {
    return marchinerysModel.findAll()
  }
  function findMarchineryUuid(uuid) {
    const cond = { where : { uuid } }
    return marchinerysModel.findOne(cond)
  }
  return {
    createMarchinery,
    updateMarchinery,
    deleteMarchinery,
    findMarchinery,
    findMarchineryUuid
  }
}

module.exports = setupMarchinery