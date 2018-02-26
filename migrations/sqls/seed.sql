INSERT INTO manufacturers (name) VALUES ('Kinto');
INSERT INTO manufacturers (name) VALUES ('Patagonia');
INSERT INTO manufacturers (name) VALUES ('Dick Taylor');

INSERT INTO categories (name) VALUES ('Drinkware');
INSERT INTO categories (name) VALUES ('Apparel - Women''s');
INSERT INTO categories (name) VALUES ('Food/Beverage');

INSERT INTO products (
  manufacturer_id,
  category_id,
  name,
  information,
  length,
  width,
  height,
  volume
)
VALUES (
  (SELECT id FROM manufacturers WHERE name = 'Kinto'),
  (SELECT id FROM categories WHERE name = 'Drinkware'),
  'Carat Coffee Dripper and Pot',
  jsonb_build_array('Superior stainless-steel and heat-resistant glass glass', 'Set comes with a stainless-steel filter that allows for greater extraction of coffee oils than a paper filter, resulting in a richer and smoother coffee', 'Pot, dripper, lid: microwave and dishwasher safe', 'Filter, holder, silicone ring: dishwasher safe'),
  4.4,
  8,
  5.5,
  24.3
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image,
  is_default
)
VALUES (
  (SELECT id FROM products WHERE name = 'Carat Coffee Dripper and Pot'),
  'Carat Coffee Dripper and Pot',
  64,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/items/default_images/000/000/610/full_size/kinto_carat_coffee_dripper_and_pot.jpg?1510489804',
  true
);

INSERT INTO products (
  manufacturer_id,
  category_id,
  name,
  information
)
VALUES (
  (SELECT id FROM manufacturers WHERE name = 'Patagonia'),
  (SELECT id FROM categories WHERE name = 'Apparel Women''s'),
  'Hybrid Jacket',
  jsonb_build_array('93% polyester/7% spandex stretch woven with fleece grid backer', '3-layer Polartec Windbloc stretch-woven polyester soft-shell with a DWR (durable water repellent) finish', 'Stretchy, breathable, double-weave soft-shell fabric on side panels, underarms and cuffs', 'High, harness- and pack-compatible handwarmer pockets and one interior chest pocket have brushed tricot lining')
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image,
  is_default
)
VALUES (
  (SELECT id FROM products WHERE name = 'Hybrid Jacket'),
  'Black',
  189,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/000/899/full_size/patagonia_women_s_adze_hybrid_jacket___black.jpg?1510663389',
  true
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image
)
VALUES (
  (SELECT id FROM products WHERE name = 'Hybrid Jacket'),
  'White',
  189,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/000/899/full_size/patagonia_women_s_adze_hybrid_jacket___black.jpg?1510663389'
);

INSERT INTO products (
  manufacturer_id,
  category_id,
  name,
  information,
  weight
)
VALUES (
  (SELECT id FROM manufacturers WHERE name = 'Dick Taylor'),
  (SELECT id FROM categories WHERE name = 'Food/Beverage'),
  'Bars with Inclusions',
  jsonb_build_array('Using the finest cacao, and a modern take on traditional European technique, we are able to fully realize the potential of the beans we source.', 'All of our chocolate is carefully crafted from the bean in our small factory in Northern California.'),
  0.125
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image,
  is_default
)
VALUES (
  (SELECT id FROM products WHERE name = 'Bars with Inclusions'),
  'Maple Coconut',
  8.5,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/714/full_size/dick_taylor_bars_with_inclusions___maple_coconut.jpg?1510664221',
  true
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image
)
VALUES (
  (SELECT id FROM products WHERE name = 'Bars with Inclusions'),
  'Black Fig',
  8.5,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/715/full_size/dick_taylor_bars_with_inclusions___black_fig.jpg?1510664221'
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image
)
VALUES (
  (SELECT id FROM products WHERE name = 'Bars with Inclusions'),
  'Fleur De Sel',
  8.5,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/716/full_size/dick_taylor_bars_with_inclusions___fleur_de_sel.jpg?1510664222'
);

INSERT INTO product_options (
  product_id,
  name,
  price,
  image
)
VALUES (
  (SELECT id FROM products WHERE name = 'Bars with Inclusions'),
  'Brown butter with nibs + sea salt',
  8.5,
  'https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/717/full_size/dick_taylor_bars_with_inclusions___brown_butter_with_nibs___sea_salt.jpg?1510664223'
);
