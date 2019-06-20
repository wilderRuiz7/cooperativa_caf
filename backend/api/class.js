'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { classNew } = req.body
    const { Class } = await db()
    const result = await Class.createClass(classNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { classUpdate } = req.body
    const { Class } = await db()
    const result = await Class.updateClass(uuid, classUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Class } = await db()
    const result = await Class.deleteClass(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Class } = await db()
    const result = await Class.findClasss()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Class } = await db()
    const result = await Class.findClassUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router