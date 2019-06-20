'use strict'

function setupPlan(planModel) {
  async function createPlan(plan) {
    const result = await planModel.create(plan)
    return result.toJSON()
  }
  async function updatePlan(uuid, plan) {
    const cond = { where : { uuid } }
    const result = await planModel.update(plan, cond)
    return result ? planModel.findOne(cond) : new Error('No se actualizo ninguna venta ')
  }
  async function deletePlan(uuid) {
    const cond = { where : { uuid } }
    const result = await planModel.destroy( cond)
    return result ? true : false
  }
  function findPlan() {
    return planModel.findAll()
  }
  function findPlanUuid(uuid) {
    const cond = { where : { uuid } }
    return planModel.findOne(cond)
  }
  return {
    createPlan,
    updatePlan,
    deletePlan,
    findPlan,
    findPlanUuid
  }
}

module.exports = setupPlan