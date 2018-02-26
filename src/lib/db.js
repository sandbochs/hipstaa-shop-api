// @flow
import { Pool } from 'pg'
import { parse } from 'url'

import { postgres } from 'config'

const {
  auth = '',
  hostname: host,
  pathname = '',
} = parse(postgres)
const [user, password] = auth.split(':')
const database = pathname.substring(1)

const connection = {
  user,
  password,
  host,
  database,
}

const pool = new Pool(connection)

export default {
  query: (sql: string, params: any, callback: () => mixed) => pool.query(sql, params, callback),
}
