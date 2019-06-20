'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'chons-gym',
    username: process.env.DB_USER || 'chons-gym-user',
    password: process.env.DB_PASS || 'chonsgym12345',
    host: process.env.DB_HOST || '10.98.12.80',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

Object.assign(config, { pkg })

module.exports = config