'use strict'

function setupReservation(reservationModel) {
  async function createReservation(reservation) {
    const result = await reservationModel.create(reservation)
    return result.toJSON()
  }
  async function updateReservation(uuid,reservation) {
    const cond = { where : { uuid } }
    const result = await reservationModel.update(reservation, cond)
    return result ? reservationModel.findOne(cond) : new Error('No se actualizo ninguna reservacion')
  }
  async function deleteReservation(uuid) {
    const cond = { where : { uuid } }
    const result = await reservationModel.destroy( cond)
    return result ? true : false
  }
  function findReservation() {
    return reservationModel.findAll()
  }
  function findReservationUuid(uuid) {
    const cond = { where : { uuid } }
    return reservationModel.findOne(cond)
  }
  return{
    createReservation,
    updateReservation,
    deleteReservation,
    findReservation,
    findReservationUuid
  }
}
 module.exports = setupReservation