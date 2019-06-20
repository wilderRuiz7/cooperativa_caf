'use strict'

function setupMembership(membershipsModel) {
  async function createMembership(memberships) {
    const result = await membershipsModel.create(memberships)
    return result.toJSON()
  }
  async function updateMembership(uuid, memberships) {
    const cond = { where : { uuid } }
    const result = await membershipsModel.update(memberships, cond)
    return result ? membershipsModel.findOne(cond) : new Error('No se actualizo ninguna membresia')
  }
  async function deleteMembership(uuid) {
    const cond = { where : { uuid } }
    const result = await membershipsModel.destroy( cond)
    return result ? true : false
  }
  function findMembership() {
    return membershipsModel.findAll()
  }
  function findMembershipUuid(uuid) {
    const cond = { where : { uuid } }
    return membershipsModel.findOne(cond)
  }
  return {
    createMembership,
    updateMembership,
    deleteMembership,
    findMembership,
    findMembershipUuid
  }
}

module.exports = setupMembership