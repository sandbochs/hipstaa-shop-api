import fs from 'fs'
import path from 'path'
import { Client } from 'pg'

import { postgres } from '../src/config'

const seedDb = async (sql) => {
  const client = new Client(postgres)

  await client.connect()
  await client.query(sql)
  await client.end()
}

const seedFilePath = path.join(__dirname, '../migrations/sqls/seed.sql')
fs.readFile(seedFilePath, { encoding: 'utf-8' }, (error, file) => {
  if (error) {
    console.log(error) // eslint-disable-line
  } else {
    seedDb(file)
  }
})

