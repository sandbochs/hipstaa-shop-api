// @flow
import db from 'lib/db'
import sqls from './sqls'

import type { Product } from 'types'

type Params = {
  id: number
}

export default async ({ id }: Params): Promise<Array<Product>> => {
  const params = [id]
  const res = await sqls.getProduct(params, db.query)
  return res.rows[0]
}
