'use strict'

function setupInstallation(installationsModel) {
  async function createInstallation(installations) {
    const result = await installationsModel.create(installations)
    return result.toJSON()
  }
  async function updateInstallation(uuid, installations) {
    const cond = { where : { uuid } }
    const result = await installationsModel.update(installations, cond)
    return result ? installationsModel.findOne(cond) : new Error('No tiene una actualizacion nueva')
  }
  async function deleteInstallation(uuid) {
    const cond = { where : { uuid } }
    const result = await installationsModel.destroy( cond)
    return result ? true : false
  }
  function findInstallation() {
    return installationsModel.findAll()
  }
  function findInstallationUuid(uuid) {
    const cond = { where : { uuid } }
    return installationsModel.findOne(cond)
  }
  return {
    createInstallation,
    updateInstallation,
    deleteInstallation,
    findInstallation,
    findInstallationUuid
  }
}

module.exports = setupInstallation