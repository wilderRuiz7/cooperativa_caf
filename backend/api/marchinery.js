'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { marchineryNew } = req.body
    const { Marchinery } = await db()
    const result = await Marchinery.createMarchinery(marchineryNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { marchineryUpdate } = req.body
    const { Marchinery } = await db()
    const result = await Marchinery.updateMarchinery(uuid, marchineryUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Marchinery } = await db()
    const result = await Marchinery.delMarchinery(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Marchinery } = await db()
    const result = await Marchinery.findMarchinery()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Marchinery } = await db()
    const result = await Marchinery.findMarchineryUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router