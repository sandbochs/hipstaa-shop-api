// @flow
import db from 'lib/db'
import sqls from './sqls'

import type { Product } from 'types'

type Params = {
  start?: number,
  max: number
}

type Products = {
  next?: number,
  products: Array<Product>
}

export default async ({ start, max }: Params): Promise<Products> => {
  const params = [start || 0, max + 1]

  const { rows } = await sqls.getProducts(params, db.query)

  if (rows.length > max) {
    return {
      next: rows[rows.length - 1].id,
      products: rows.slice(0, max),
    }
  }

  return { products: rows }
}
