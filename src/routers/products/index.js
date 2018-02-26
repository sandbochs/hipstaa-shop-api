// @flow
import { Router } from 'express'
import type { NextFunction } from 'express' // eslint-disable-line

import { getProducts } from 'stores/products/get-products'

const router = Router()
router.get('/', async (req: any, res: any, next: NextFuntion): Promise<void> => {
  const products = await getProducts(req.query)
  res.json(products)
})

export const products = router
