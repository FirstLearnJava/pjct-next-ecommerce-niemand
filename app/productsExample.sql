-- Create products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_name varchar(100) NOT NULL,
  type varchar(50) NOT NULL,
  price decimal(10, 2) NOT NULL
);

-- Insert values into products
INSERT INTO
  products (product_name, type, price)
VALUES
  (
    'cups and plates set',
    'pottery',
    24.99
  ),
  (
    'green coffee cups',
    'pottery',
    8.49
  ),
  (
    'cylindric pot',
    'pottery',
    9.99
  ),
  (
    'blue breakfast plate',
    'pottery',
    6.99
  ),
  (
    'white and blue cast coffee cups',
    'pottery',
    8.49
  ),
  (
    'blue dungaree trousers',
    'fashion',
    44.99
  ),
  (
    'tetrapack woven dress',
    'fashion',
    74.99
  ),
  (
    'waveshaped trousers with crochet hat and crochet bag',
    'fashion',
    59.99
  ),
  (
    'patchwork pullover with crochet hat',
    'fashion',
    49.99
  ),
  (
    'patchwork top with crochet hat',
    'fashion',
    44.99
  );

ALTER TABLE products
ALTER COLUMN price type decimal(10, 2);

run migrations
WITH
  pnpm run migrate down
  OR pnpm run migrate up
