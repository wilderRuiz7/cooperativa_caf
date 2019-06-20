'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('diet', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    dia: {
        type: Sequelize.TEXT,
        
    },
    desayuno: {
        type: Sequelize.TEXT,
        
    },
    descripcion_desayuno: {
        type: Sequelize.TEXT,
       
    },
    onces: {
        type: Sequelize.TEXT,
        
    },
    descripcion_onces: {
        type: Sequelize.TEXT,
        
    },
    almuerzo: {
        type: Sequelize.TEXT,
        
    },
    descripcion_almuerzo: {
        type: Sequelize.TEXT,
        
    },
    merienda: {
        type: Sequelize.TEXT,
        
    },
    descripcion_merienda: {
        type: Sequelize.TEXT,
        
    },cena: {
        type: Sequelize.TEXT,
        
    },
    descripcion_cena: {
        type: Sequelize.TEXT,
        
    },
  })
}