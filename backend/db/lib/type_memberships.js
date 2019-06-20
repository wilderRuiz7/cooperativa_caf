'use strict'

function setupType_Membership(type_membershipsModel) {
  async function createType_Membership(type_memberships) {
    const result = await type_membershipsModel.create(type_memberships)
    return result.toJSON()
  }
 
  async function deleteType_Membership(uuid) {
    const cond = { where : { uuid } }
    const result = await type_membershipsModel.destroy( cond)
    return result ? true : false
  }
  function findType_Membership() {
    return type_membershipsModel.findAll()
  }
  function findType_MembershipUuid(uuid) {
    const cond = { where : { uuid } }
    return type_membershipsModel.findOne(cond)
  }
  return {
    createType_Membership,
    deleteType_Membership,
    findType_Membership,
    findType_MembershipUuid
  }
}

module.exports = setupType_Membership