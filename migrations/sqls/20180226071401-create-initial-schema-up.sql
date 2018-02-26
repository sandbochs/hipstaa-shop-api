CREATE TABLE manufacturers (
  id serial PRIMARY KEY,
  name text  NOT NULL
);

CREATE TABLE categories (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE products (
  id serial PRIMARY KEY,
  manufacturer_id integer REFERENCES manufacturers(id),
  category_id integer REFERENCES categories(id),
  name text NOT NULL,
  information jsonb NOT NULL DEFAULT '{}'::jsonb,
  length decimal,
  width decimal,
  height decimal,
  weight decimal,
  volume decimal
);

CREATE TABLE product_options (
  id serial NOT NULL,
  product_id integer REFERENCES products(id),
  name text NOT NULL,
  price decimal NOT NULL,
  image text,
  is_default bool DEFAULT false,
  PRIMARY KEY (product_id, id, name)
);
