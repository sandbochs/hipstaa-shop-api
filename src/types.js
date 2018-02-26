// @flow
export type Manufacturer = {
  id: number,
  name: string
}

export type Category = {
  id: number,
  name: string
}

export type ProductOption = {
  id: number,
  name: string,
  price: number,
  image: ?string,
  isDefault: bool
}

export type Product = {
  id: number,
  name: string,
  manufacturer: Manufacturer,
  category: Category,
  information: Array<string>,
  length: ?number,
  width: ?number,
  height: ?number,
  weight: ?number,
  volume: ?number,
  options: Array<ProductOption>
}
