// @flow
import { Router } from 'express'

import { products } from './products'

const router = Router()
router.use('/products', products)

export const v1 = router
