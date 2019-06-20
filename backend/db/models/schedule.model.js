'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('schedule', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    hora_inicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_fin: {
        type: Sequelize.DATE,
        allowNull: false
    },
  })
}