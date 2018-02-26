import fs from 'fs'
import path from 'path'
import { Client } from 'pg'

export const postgres = 'postgres://postgres@localhost/test_hipstaa'

const seedDb = async (sql) => {
  const client = new Client(postgres)

  await client.connect()

  // confirm table are empty before seeding
  const { rows } = await client.query('SELECT COUNT(id) FROM products;')
  if (rows[0] && rows[0].count === '0') {
    await client.query(sql)
  }
  await client.end()
}

const seedFilePath = path.join(__dirname, '../migrations/sqls/seed.sql')
fs.readFile(seedFilePath, { encoding: 'utf-8' }, (error, file) => {
  if (error) {
    console.log(error) // eslint-disable-line
  } else {
    seedDb(file)
    console.log('Seeded DB')
  }
})

