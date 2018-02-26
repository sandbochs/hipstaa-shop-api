// @flow
import { Router } from 'express'
import type { NextFunction } from 'express' // eslint-disable-line

const router = new Router()
router.get('/', async (req: any, res: any, next: NextFuntion): Promise<void> => {
  res.json([])
})

export const products = router
