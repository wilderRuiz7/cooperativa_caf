'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { installationNew } = req.body
    const { Installation } = await db()
    const result = await Installation.createInstallation(installationNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { installationUpdate } = req.body
    const { Installation } = await db()
    const result = await Installation.updateInstallation(uuid, installationUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Installation } = await db()
    const result = await Installation.deleteInstallation(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Installation } = await db()
    const result = await Installation.findInstallation()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Installation } = await db()
    const result = await Installation.findInstallationUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router