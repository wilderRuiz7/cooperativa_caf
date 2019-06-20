'use strict'

const { getLogger } = require('@chons-gym/utils')
const user = require('./user')
const product = require('./product')
const reservation = require ('./reservation')
const schedule = require ('./schedule')
const sale = require ('./sale')
const membership = require ('./membership')
const classes = require ('./class')
const detail_membership = require ('./detail_membership')
const detail_sale = require ('./detail_sale')
const type_class = require ('./type_class')
const type_membership = require ('./type_membership')
const marchinery = require ('./marchinery')
const installation = require ('./installation')
const plan = require ('./plan')
const novelty = require ('./novelty')
const tip = require ('./tip')
const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
    })
  },
  user,
  product,
  reservation,
  schedule,
  sale,
  membership,
  classes,
  detail_membership,
  detail_sale,
  type_class,
  type_membership,
  marchinery,
  installation,
  plan,
  novelty,
  tip,
  errorHandler (err, req, res, next) {
    if (err) {
      let code = err.code || 500
      const { id } = req
      const { message, stack } = err
      log.debug({ id, message: stack })
      log.error({ id, message })
      res.status(code).send({ error: message })
      return
    }

    next()
  }
}
