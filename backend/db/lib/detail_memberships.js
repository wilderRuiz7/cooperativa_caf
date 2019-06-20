'use strict'

function setupDetail_Membership(detail_membershipsModel) {
  async function createDetail_Membership(detail_memberships) {
    const result = await detail_membershipsModel.create(detail_memberships)
    return result.toJSON()
  }
  async function updateDetail_Membership(uuid, detail_memberships) {
    const cond = { where : { uuid } }
    const result = await detail_membershipsModel.update(detail_memberships, cond)
    return result ? detail_membershipsModel.findOne(cond) : new Error('No se actualizo ninguna membresia')
  }
  async function deleteDetail_Membership(uuid) {
    const cond = { where : { uuid } }
    const result = await detail_membershipsModel.destroy( cond)
    return result ? true : false
  }
  function findDetail_Membership() {
    return detail_membershipsModel.findAll()
  }
  function findDetail_MembershipUuid(uuid) {
    const cond = { where : { uuid } }
    return detail_membershipsModel.findOne(cond)
  }
  return {
    createDetail_Membership,
    updateDetail_Membership,
    deleteDetail_Membership,
    findDetail_Membership,
    findDetail_MembershipUuid
  }
}

module.exports = setupDetail_Membership