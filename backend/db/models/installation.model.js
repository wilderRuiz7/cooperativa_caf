'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('installation', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    area: {
        type: Sequelize.TEXT,  
    },
    descripcion: {
        type: Sequelize.TEXT,   
    },
    foto: {
      type: Sequelize.JSON,
  }
  })
}