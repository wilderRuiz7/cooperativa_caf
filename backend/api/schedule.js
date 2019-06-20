'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { scheduleNew } = req.body
    const { Schedule } = await db()
    const result = await Schedule.createReservation(scheduleNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { scheduleUpdate } = req.body
    const { Schedule } = await db()
    const result = await Schedule.updateSchedule(uuid, scheduleUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Schedule } = await db()
    const result = await Schedule.deleteSchedule(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Schedule } = await db()
    const result = await Schedule.findSchedule()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Schedule } = await db()
    const result = await Schedule.findScheduleUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router