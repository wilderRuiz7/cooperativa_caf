'use strict'

const { getLogger, terminate } = require('@chons-gym/utils')
const inquirer = require('inquirer')
const dbs = require('./')
const { db } = require('@chons-gym/config')

const log = getLogger(__dirname, __filename)

const prompt = inquirer.createPromptModule()
async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'Esto va a destruir la base de datos, esta seguro?'
    }
  ])
  if (!answer.setup) return console.log('No pasa nada!')
  const config = {
    ...db,
    logging: s => log.debug(s),
    setup: true
  }
  const { setup } = await dbs()
  await setup().catch(terminate(1, 'dbError'))
  console.log('successs!')
  process.exit(0)
}

setup()
