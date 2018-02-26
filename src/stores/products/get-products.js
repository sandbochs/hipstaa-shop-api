// @flow
import { db } from 'lib/db'
import { default as sqls } from './sqls'

export const getProducts = async ({ start, max }) => {
  const params = [start || 0, max]


  const res = await sqls.getProducts(params, db.query)
  return res.rows
}
