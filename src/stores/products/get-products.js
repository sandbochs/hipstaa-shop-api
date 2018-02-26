// @flow
import { db } from 'lib/db'

export const getProducts = async () => {
  const res = await db.query('SELECT * FROM products')
  return res.rows
}
