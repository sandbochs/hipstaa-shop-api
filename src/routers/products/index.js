// @flow
import { Router } from 'express'
import type { NextFunction } from 'express' // eslint-disable-line

import getProduct from 'stores/products/get-product'
import getProducts from 'stores/products/get-products'

const router = Router()

router.get('/', async (req: any, res: any, next: NextFunction): Promise<void> => {
  try {
    if (!req.query.max) {
      res.status(422).send('Maximum number of products to retreive not provided.')
      return
    }

    const max = parseInt(req.query.max, 10)
    if (max < 1 || max > 100) {
      res.status(422).send('The max provided does not fall within the range of 1-100.')
      return
    }

    const { start } = req.query
    if (start) {
      const id = parseInt(start, 10)
      const product = await getProduct({ id })

      if (!product) {
        res.status(404).send('Starting product id not found.')
        return
      }
    }

    const products = await getProducts({ max, start })
    res.status(200).json(products)
  } catch (e) {
    next(e)
  }
})

export default router
