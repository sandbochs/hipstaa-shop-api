// @flow
import { db } from 'lib/db'
import { default as sqls } from './sqls'

export const getProducts = async () => {
  const res = await sqls.getProducts(null, db.query)
  return res.rows
}
