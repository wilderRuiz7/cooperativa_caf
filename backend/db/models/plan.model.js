'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('plan', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
        type: Sequelize.TEXT,  
    },
    descripcion: {
        type: Sequelize.TEXT,   
    },
    precio: {
        type: Sequelize.TEXT,   
    },
    beneficio: {
      type: Sequelize.TEXT,   
    },
    foto: {
        type: Sequelize.JSON,
    }
  })
}