// @flow
import { Router } from 'express'
import type { NextFunction } from 'express' // eslint-disable-line

import { getProducts } from 'stores/products/get-products'

const router = Router()

router.get('/', async (req: any, res: any, next: NextFuntion): Promise<void> => {
  if (!req.query.max) {
    res.status(422).send('Maximum number of products to retreive not provided.')
  }

  const max = parseInt(req.query.max, 10)
  if (max < 0 || max > 101) {
    res.status(422).send('The max provided does not fall within the range of 1-100.')
  }

  const products = await getProducts(req.query)
  res.json(products)
})

export const products = router
