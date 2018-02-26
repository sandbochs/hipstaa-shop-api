SELECT
  products.id,
  products.name,
  json_build_object(
    'id', manufacturers.id,
    'name', manufacturers.name
  ) AS manufacturer,
  json_build_object(
    'id', categories.id,
    'name', categories.name
  ) AS category,
  products.information,
  products.length,
  products.width,
  products.height,
  products.weight,
  products.volume,
  jsonb_agg(json_build_object(
      'id', product_options.id,
      'name', product_options.name,
      'price', product_options.price,
      'image', product_options.image,
      'isDefault', product_options.is_default
  )) as options
FROM products
JOIN manufacturers
ON products.manufacturer_id = manufacturers.id
JOIN categories
ON products.category_id = categories.id
JOIN product_options
ON products.id = product_options.product_id
WHERE products.id >= $1
GROUP BY
  products.id,
  manufacturers.id,
  categories.id,
  product_options.product_id
ORDER BY id ASC
LIMIT $2;
