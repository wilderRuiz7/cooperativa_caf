'use strict'
const { password } = require('@chons-gym/utils')

function setupUser(userModel) {
  async function createUser(user) {
    user.password = password.generateHash(user.password)
    const result = await userModel.create(user)
    return result.toJSON()
  }
  async function updateUser(uuid,  user) {
    const cond = { where : { uuid } }
    const result = await userModel.update(user , cond)
    return result ? userModel.findOne(cond) : new Error('no se actualizo ningun usuario')
  }
  async function deleteUser(uuid) {
    const cond = { where : { uuid } }
    const result = await userModel.destroy(cond)
    return result ? true : false

  }
  function findUsers() {
    return userModel.findAll()
  }
  function findUserUuid(uuid) {
    const cond = { where : { uuid } }
    return userModel.findOne(cond)
  }
  async function singin(credentials){
    
    let dataFail = 'datos incorrectos'
    const cond = { where : { email: credentials.email } }
    const user = await userModel.findOne(cond)
    if (!user) {
      return {
        message: dataFail,
        login: false
      }
    }
    if (!(password.compareHash(credentials.password, user.password))) {
      return {
        message: dataFail,
        login: false
      }
    }
    return {
      message: `Bienvenido`,
      user,
      login: true
    }

  }
  return{
    createUser,
    updateUser,
    deleteUser,
    findUsers,
    findUserUuid,
    singin
  }
}

module.exports = setupUser