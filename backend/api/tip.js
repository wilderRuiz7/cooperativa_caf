'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { tipNew } = req.body
    const { Tip } = await db()
    const result = await Tip.createTip(tipNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { tipUpdate } = req.body
    const { Tip } = await db()
    const result = await Tip.updateTip(uuid, tipUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Tip } = await db()
    const result = await Tip.deleteTip(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Tip } = await db()
    const result = await Tip.findTip()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Tip } = await db()
    const result = await Tip.findTipUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router