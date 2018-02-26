// @flow
import express from 'express'
import { port } from 'config'

import v1 from 'routers/v1'

const app = express()

app.use('/v1', v1)

app.listen(port, () => {
  console.log(`Now listening on ${port}`) // eslint-disable-line
})

export default app
