'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { membershipNew } = req.body
    const { Membership } = await db()
    const result = await Membership.createMembership(membershipNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { membershipUpdate } = req.body
    const { Membership } = await db()
    const result = await Membership.updateMembership(uuid, membershipUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Membership } = await db()
    const result = await Membership.deleteMembership(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Membership } = await db()
    const result = await Membership.findMembership()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Membership } = await db()
    const result = await Membership.findMembershipUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router