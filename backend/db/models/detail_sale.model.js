'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('detail_sale', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
    },  
    valor: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false 
    }
  })
}