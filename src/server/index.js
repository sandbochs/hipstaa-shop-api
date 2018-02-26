// @flow
import express from 'express'
import { port } from './config'

const app = express()

app.listen(port, () => {
  console.log(`Now listening on ${port}`) // eslint-disable-line
})
