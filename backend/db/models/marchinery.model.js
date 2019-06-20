'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('marchinery', {
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
    marca: {
        type: Sequelize.TEXT,   
    },
    tipo: {
        type: Sequelize.TEXT,
    }
  })
}