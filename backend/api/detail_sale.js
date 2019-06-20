'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { detail_saleNew } = req.body
    const { detail_Sale } = await db()
    const result = await detail_Sale.createdetail_Sale(detail_saleNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { detail_saleUpdate } = req.body
    const { detail_Sale } = await db()
    const result = await detail_Sale.updatedetail_Sale(uuid, detail_saleUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { detail_Sale } = await db()
    const result = await detail_Sale.deletedetail_Sale(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { detail_Sale } = await db()
    const result = await detail_Sale.finddetail_Sale()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { detail_Sale } = await db()
    const result = await detail_Sale.finddetail_SaleUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router