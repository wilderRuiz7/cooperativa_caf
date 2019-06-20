'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { userNew } = req.body
    const { User } = await db()
    const result = await User.createUser(userNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.post('/singin', async function(req, res, next){
  try {
    const credentials = req.body
    console.log(credentials)
    const { User } = await db()
    const result = await User.singin(credentials)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next){
  try {
    const { uuid } = req.params
    const { userUpdate } = req.body
    console.log(uuid, userUpdate)
    const { User } = await db()
    const result = await User.updateUser(uuid, userUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.deleteUser(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.get('/', async function (req, res, next) {
  try {
    const { User } = await db()
    const result = await User.findUsers()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.findUserUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
