// @flow
import request from 'supertest'
import app from 'server'

describe('GET /v1/products', () => {
  describe('4XX Errors', () => {
    test('responds with 422 if no max is supplied', async () => {
      request(app)
        .get('/v1/products')
        .expect(422)
    })

    test('responds with 422 if max is less than 1', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 0 })
        .expect(422)
    })

    test('responds with 422 if max is greater than 100', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 9001 })
        .expect(422)
    })

    test('responds with 404 if the start product does not exist', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 1, start: 9001 })
        .expect(404)
    })
  })

  describe('Success', () => {
    test('handles a request without \'start\' and with a max constraint', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 1 })
        .expect(200)
        .then((res) => {
          const {
            next,
            products,
          } = res.body

          expect(next).toBe(2)
          expect(products.length).toBe(1)
          expect(products[0].id).toBe(1)
        })
    })

    test('does not set next if there are no more products', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 100, start: 2 })
        .expect(200)
        .then((res) => {
          const {
            next,
            products,
          } = res.body

          expect(next).toBe(undefined)
          expect(products.length).toBe(2)
          expect(products[0].id).toBe(2)
          expect(products[1].id).toBe(3)
        })
    })

    test('responds with one product if start is set to the last product', async () => {
      request(app)
        .get('/v1/products')
        .query({ max: 100, start: 3 })
        .expect(200)
        .then((res) => {
          const {
            next,
            products,
          } = res.body

          expect(next).toBe(undefined)
          expect(products.length).toBe(1)
          expect(products[0].id).toBe(3)
        })
    })
  })
})
