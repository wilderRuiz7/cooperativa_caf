'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { type_classNew } = req.body
    const { Type_Class } = await db()
    const result = await Type_Class.createType_Class(type_classNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function (req, res, next){
  try {
    const { uuid } = req.params
    const { type_classUpdate } = req.body
    const { Type_Class } = await db()
    const result = await Type_Class.updateType_Class(uuid, type_classUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})


router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Type_Class } = await db()
    const result = await Type_Class.deleteType_Class(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Type_Class } = await db()
    const result = await Type_Class.findType_Class()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Type_Class } = await db()
    const result = await Type_Class.findType_ClassUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router