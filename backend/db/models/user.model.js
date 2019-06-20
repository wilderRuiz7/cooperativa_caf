'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    cedula: {
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    apellido: {
      type: Sequelize.TEXT
    },
    rol: {
      type: Sequelize.ENUM('cliente','administrador','empleado','proveedor')
    },
    telefono: {
      type: Sequelize.TEXT,
    },
    direccion: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    genero: {
      type: Sequelize.ENUM('Femenino', 'Masculino') 
    },
    peso: {
      type: Sequelize.DECIMAL(4,1),
    },
    altura: {
      type: Sequelize.DECIMAL(3,2),
    },
    edad: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.TEXT,
    },
    empresa:{
      type : Sequelize.TEXT
    },
    foto:{
      type: Sequelize.JSON
    }
  })
}
