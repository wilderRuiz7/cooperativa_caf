'use strict'

function setupSchedule(sheduleModel) {
  async function createSchedule(shedule) {
    const result = await sheduleModel.create(shedule)
    return result.toJSON()
  }
  async function updateSchedule(uuid, schedule) {
    const cond = { where : { uuid } }
    const result = await scheduleModel.update(schedule, cond)
    return result ? scheduleModel.findOne(cond) : new Error('No se actualizo ningun horario')
  }
  async function deleteSchedule(uuid) {
    const cond = { where : { uuid } }
    const result = await scheduleModel.destroy( cond)
    return result ? true : false
  }
  function findSchedule() {
    return scheduleModel.findAll()
  }
  function findScheduleUuid(uuid) {
    const cond = { where : { uuid } }
    return scheduleModel.findOne(cond)
  }
  return {
    createSchedule,
    updateSchedule,
    deleteSchedule,
    findSchedule,
    findScheduleUuid
  }
}

module.exports = setupSchedule