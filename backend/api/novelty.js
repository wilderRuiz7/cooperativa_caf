'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { noveltyNew } = req.body
    const { Novelty } = await db()
    const result = await Novelty.createNovelty(noveltyNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { noveltyUpdate } = req.body
    const { Novelty } = await db()
    const result = await Novelty.updateNovelty(uuid, noveltyUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Novelty } = await db()
    const result = await Novelty.deleteNovelty(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Novelty } = await db()
    const result = await Novelty.findNovelty()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Novelty } = await db()
    const result = await Novelty.findNoveltyUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router