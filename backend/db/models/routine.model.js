'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('routine', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    dia: {
        type: Sequelize.TEXT,
        
    },
    musculo: {
        type: Sequelize.TEXT,
        
    },
    ejercicio: {
        type: Sequelize.TEXT,
       
    },
    series: {
        type: Sequelize.TEXT,
        
    },
  })
}