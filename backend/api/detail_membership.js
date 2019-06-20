'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { detail_membershipNew } = req.body
    const { detail_Membership } = await db()
    const result = await Detail_Membership.createDetail_Membership(detail_membershipNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { detail_membershipUpdate } = req.body
    const { Detail_Membership } = await db()
    const result = await Detail_Membership.updateDetail_Membership(uuid, detail_membershipUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Detail_Membership } = await db()
    const result = await Detail_Membership.deleteDetail_Membership(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Detail_Membership } = await db()
    const result = await Detail_Membership.findDetail_Membership()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Detail_Membership } = await db()
    const result = await Detail_Membership.findDetail_MembershipUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router