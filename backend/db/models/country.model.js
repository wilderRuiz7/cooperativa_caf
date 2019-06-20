'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('country', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    alfa_2: {
        type: Sequelize.DATE,
        allowNull: false
    },
    alfa_3: {
        type: Sequelize.DATE,
        allowNull: false
    },
    codigo_nal: {
        type: Sequelize.DATE,
        allowNull: false
    },
    nombre: {
        type: Sequelize.DATE,
        allowNull: false
    },
  })
}