'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('membership', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    fecha_registro:{
        type: Sequelize.DATE,
        allowNull: false
    },
    tipo_pago: {
        type: Sequelize.TEXT,
        allowNull: false
    },
  })
}