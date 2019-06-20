'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('reservation', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    estado: {
      type: Sequelize.ENUM('disponible', 'ocupado') ,
      alloNull: false
    },
    fecha_reserva: {
      type: Sequelize.DATE,
      alloNull: false
    }
  })
}
