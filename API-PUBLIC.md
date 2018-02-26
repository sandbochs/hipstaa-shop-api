# /v1 Public API

### `GET` /v1/products
Retreive a paginated list of products.

#### Body
Example
``` json
{
  "max": 50
}
```

| Property | Type | Nullable | Description |
|----------|------|----------|-------------|
| start | integer | yes | The id of the first product to retreive |
| max | integer | no | Number of products to retreive. The acceptable range is 1-100. |

#### Responses

##### 200
Example
``` json
{
  "next": 322,
  "products": [{
    "id": 321,
    "name": "Carat Coffee Dripper",
    "manufacturer": {
      "id": 111,
      "name": "Kinto"
    },
    "category": {
      "id": 222,
      "name": "Drinkware"
    },
    "information": [
      "Superior stainless-steel and heat-resistant glass glass",
      "Pot, dripper, lid: microwave and dishwasher safe"
    ],
    "length": 4.4,
    "width": 8,
    "height": 5.5,
    "volume": 24.3,
    "options": [{
      "id": 333,
      "name": "Carat Coffee Dripper",
      "price": 64,
      "image": "http://imagehost.com/Ac23Df.jpg",
      "isDefault": true
    }]
  }]
}
```

| Property | Type | Nullable | Description |
|----------|------|----------|-------------|
| next | integer | yes | The id of the next product (the product after the last retreived product). Property will be null if there are no more products to retreive. |
| products | array | no | An array of the retreived products. |

Product

| Property | Type | Nullable | Description |
|----------|------|----------|-------------|
| id | integer | no | The id of the product. |
| name | string | no | The name of the product. |
| manufacturer | object | no | |
| manufacturer.id | integer | no | The id of the manufacturer. |
| manufacturer.name | string | no | The name of the manufacturer. |
| category | object | no | |
| category.id | integer | no | The id of the category. |
| category.name | string | no | The name of the category. |
| information | array | no | An array of strings containing product information. |
| length | number | yes | The length in inches. |
| width | number | yes | The width in inches. |
| height | number | yes | The height in inches. |
| weight | number | yes | The weight in pounds (lbs). |
| volume | number | yes | The volume in ounces (oz).
| options | array | no | An array of product options. A product will have one option at minimum. |

Product Option

| Property | Type | Nullable | Description |
|----------|------|----------|-------------|
| id | integer | no | The id of the option. |
| name | string | no | The name of the option. |
| price | number | no | The price of the option. |
| image | string | yes | The uri of an image. |
| isDefault | bool | no | True if the option should be selected first. |

##### 404
- Starting product id not found.

##### 422
- Maximum number of products to retreive not provided.
- The max provided does not fall within the range of 1-100.

### `GET` /v1/manufacturers/:id/products
(Stretch)

### `GET` /v1/categories/:id/products
(Stretch)