'use strict'

function setupType_Class(type_classModel) {
  async function createType_Class(type_class) {
    const result = await type_classModel.create(type_class)
    return result.toJSON()
  }
  async function updateType_Class(uuid, type_class ) {
    const cond = { where : { uuid } }
    const result = await type_classModel.update(type_class , cond)
    return result ? type_classModel.findOne(cond) : new Error('no se actualizo ningun tipo de clase')
  }
  async function deleteType_Class(uuid) {
    const cond = { where : { uuid } }
    const result = await type_classModel.destroy( cond)
    return result ? true : false
  }
  function findType_Class() {
    return type_classModel.findAll()
  }
  function findType_ClassUuid(uuid) {
    const cond = { where : { uuid } }
    return type_classModel.findOne(cond)
  }
  return {
    createType_Class,
    updateType_Class,
    deleteType_Class,
    findType_Class,
    findType_ClassUuid,
  }
}

module.exports = setupType_Class