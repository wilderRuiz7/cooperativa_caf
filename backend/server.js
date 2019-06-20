'use strict'

const http = require('http')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { errorHandler, home, user, product, reservation,schedule, sale, membership, classes, detail_membership, detail_sale, type_class,type_membership,marchinery,installation,plan,novelty,tip} = require('@chons-gym/api')
const { getLogger, logHandler, terminate } = require('@chons-gym/utils')

const app = express()
const server = http.createServer(app)
const log = getLogger(__dirname, __filename)
const port = +process.env.PORT || 8000

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logHandler)
app.use('/user', user)
app.use('/product', product)
app.use('/reservation', reservation)
app.use('/schedule' , schedule)
app.use('/sale' , sale)
app.use('/membership' , membership)
app.use('/class', classes)
app.use('/detail_membership',detail_membership)
app.use('/detail_sale', detail_sale)
app.use('/type_class', type_class)
app.use('/type_membership',type_membership)
app.use('/marchinery' , marchinery)
app.use('/installation' , installation)
app.use('/plan',plan)
app.use('/novelty',novelty)
app.use('/tip', tip)
app.get('/', home)
app.use(errorHandler)

module.exports = server

if (!module.parent) {
  server.listen(port, () => {
    log.info(`server listening on http://localhost:${port}`)
  })

  process.on('SIGINT', terminate(0, 'SIGINT'))
  process.on('SIGTERM', terminate(0, 'SIGTERM'))
  process.on('uncaughtException', terminate(1, 'uncaughtException'))
  process.on('unhandledRejection', terminate(1, 'unhandledRejection'))
}
