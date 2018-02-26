// @flow
import { db } from 'lib/db'
import { default as sqls } from './sqls'

export const getProducts = async ({ start, max }) => {
  const params = [start || 0, max + 1]

  const { rows } = await sqls.getProducts(params, db.query)

  if (rows.length > max) {
    return {
      next: rows[rows.length - 1].id,
      products: rows.slice(0, max)
    }
  } else {
    return {
      products: rows
    }
  }
}
