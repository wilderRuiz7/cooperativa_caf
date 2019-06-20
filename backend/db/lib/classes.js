'use strict'

function setupClass(classModel) {
  async function createClass(classes) {
    const result = await classModel.create(classes)
    return result.toJSON()
  }
  async function updateClass(uuid,classes) {
    const cond = { where : { uuid } }
    const result = await classModel.update(classes, cond)
    return result ? classModel.findOne(cond) : new Error('No se actualizo ninguna clase')
  }
  async function deleteClass(uuid) {
    const cond = { where : { uuid } }
    const result = await classModel.destroy( cond)
    return result ? true : false
  }
  function findClass() {
    return classModel.findAll()
  }
  function findClassUuid(uuid) {
    const cond = { where : { uuid } }
    return classModel.findOne(cond)
  }
  return {
    createClass,
    updateClass,
    deleteClass,
    findClass,
    findClassUuid
  }
}

module.exports = setupClass