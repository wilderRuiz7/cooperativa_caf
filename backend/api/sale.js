'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { saleNew } = req.body
    const { Sale } = await db()
    const result = await Sale.createSale(saleNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { saleUpdate } = req.body
    const { Sale } = await db()
    const result = await Sale.updateSale(uuid, saleUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Sale } = await db()
    const result = await Sale.deleteSale(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Sale } = await db()
    const result = await Sale.findSale()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Sale } = await db()
    const result = await Sale.findSaleUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router