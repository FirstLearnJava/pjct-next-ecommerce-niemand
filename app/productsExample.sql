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


#Table for discounts:


 import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE discounts (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY, discount_name varchar(50) NOT NULL, discount_percentage integer NOT NULL
  );`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE discounts;
  `;
}

import { Sql } from 'postgres';

export const discounts = [
  { id: 1, discountName: 'FIRSTPURCHASE', discountPercentage: 10 },
  { id: 2, discountName: 'BLACKFRIDAY2024', discountPercentage: 20 },
  { id: 3, discountName: 'BIRTHDAY', discountPercentage: 10 },
  { id: 4, discountName: 'SECRETEMPLOYEES', discountPercentage: 30 },
];

export async function up(sql: Sql) {
  for (const discount of discounts) {
    await sql`
  INSERT INTO discounts
  (discount_name, discount_percentage)
  VALUES
  (${discount.discountName}, ${discount.discountPercentage});
  `;
  }
}

export async function down(sql: Sql) {
  for (const discount of discounts) {
    await sql`
    DELETE FROM discounts
    WHERE id=${discount.id};`;
  }
}

#table for products discounts:


import { Sql } from 'postgres';

type Discount = {
  id: number;
  discount: number;
  discountName: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products_discounts (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_id integer NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    discount_id integer NOT NULL REFERENCES discounts (id) ON DELETE CASCADE
  );
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products_discounts;
  `;
}

import { Sql } from 'postgres';

export const productsDiscounts = [
  { id: 1, productId: 4, discountId: 4 },
  { id: 2, productId: 3, discountId: 2 },
  { id: 3, productId: 2, discountId: 3 },
  { id: 4, productId: 1, discountId: 4 },
];

export async function up(sql: Sql) {
  for (const productsDiscount of productsDiscounts) {
    await sql`
    INSERT INTO products_discounts
    (product_id, discount_id)
    VALUES
    (${productsDiscount.productId}, ${productsDiscount.discountId});
    `;
  }
}
export async function down(sql: Sql) {
  for (const productsDiscount of productsDiscounts) {
    await sql`
  DELETE FROM products_discounts
  WHERE id=${productsDiscount.id}`;
  }
}
