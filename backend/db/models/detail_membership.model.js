'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('detail_membership', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    fecha_inicio:{
        type: Sequelize.DATE,
        allowNull: false
    },
    valor: {
        type: Sequelize.TEXT,
        allowNull: false
    }
  })
}