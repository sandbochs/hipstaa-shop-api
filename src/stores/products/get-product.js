// @flow
import { db } from 'lib/db'
import { default as sqls } from './sqls'

export const getProduct = async ({ id }) => {
  const params = [id]
  const res = await sqls.getProduct(params, db.query)
  return res.rows[0]
}
