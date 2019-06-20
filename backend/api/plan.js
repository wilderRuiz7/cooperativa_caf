'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { planNew } = req.body
    const { Plan } = await db()
    const result = await Plan.createPlan(planNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { planUpdate } = req.body
    const { Plan } = await db()
    const result = await Plan.updatePlan(uuid, planUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Plan } = await db()
    const result = await Plan.deletePlan(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Plan } = await db()
    const result = await Plan.findPlan()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Plan } = await db()
    const result = await Plan.findPlanUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router