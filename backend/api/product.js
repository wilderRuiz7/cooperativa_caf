'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { productNew } = req.body
    const { Product } = await db()
    const result = await Product.createProduct(productNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { productUpdate } = req.body
    const { Product } = await db()
    const result = await Product.updateProduct(uuid, productUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Product } = await db()
    const result = await Product.deleteProduct(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Product } = await db()
    const result = await Product.findProduct()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Product } = await db()
    const result = await Product.findProductUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router