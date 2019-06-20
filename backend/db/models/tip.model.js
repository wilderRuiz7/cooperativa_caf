'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('tip', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    titulo: {
        type: Sequelize.TEXT,  
    },
    segundo_tema: {
        type: Sequelize.TEXT,   
    },
    descripcion_titulo: {
        type: Sequelize.TEXT,   
    },
    descripcion_tema: {
      type: Sequelize.TEXT,   
    },
    foto: {
        type: Sequelize.JSON,
    }
  })
}