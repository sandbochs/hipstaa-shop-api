// @flow
import db from 'lib/db'
import sqls from './sqls'

export default async ({ id }) => {
  const params = [id]
  const res = await sqls.getProduct(params, db.query)
  return res.rows[0]
}
