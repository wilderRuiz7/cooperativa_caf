'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { type_membershipNew } = req.body
    const { Type_Membership } = await db()
    const result = await Type_Membership.createType_Membership(type_membershipNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Type_Membership } = await db()
    const result = await Type_Membership.deleteType_Membership(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Type_Membership } = await db()
    const result = await Type_Membership.findType_Membership()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Type_Membership } = await db()
    const result = await Type_Membership.findType_MembershipUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router