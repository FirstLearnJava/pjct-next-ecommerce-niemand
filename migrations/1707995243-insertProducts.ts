import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'cups and plates set',
    price: 24.99,
    type: 'pottery',
    api_id: 'prod_Q1Ok1xFzAbpmjy',
  },
  {
    id: 2,
    name: 'green coffee cups',
    price: 8.49,
    type: 'pottery',
    api_id: 'prod_Q1OnpSihOeXVRT',
  },
  {
    id: 3,
    name: 'blue cylindric pot',
    price: 9.99,
    type: 'pottery',
    api_id: 'prod_Q1Oqu3KurdDGtz',
  },
  {
    id: 4,
    name: 'blue breakfast plate',
    price: 6.99,
    type: 'pottery',
    api_id: 'prod_Q1Ory04DNPLgO3',
  },
  {
    id: 5,
    name: 'white and blue cast coffee cups',
    price: 8.49,
    type: 'pottery',
    api_id: 'prod_Q1OsQ7e43MlvFe',
  },
  {
    id: 6,
    name: 'blue dungaree trousers',
    price: 44.99,
    type: 'fashion',
    api_id: 'prod_Q1OsMoNNBUZKCY',
  },
  {
    id: 7,
    name: 'tetrapack woven dress',
    price: 74.99,
    type: 'fashion',
    api_id: 'prod_Q1OtgqiMH2bZ98',
  },
  {
    id: 8,
    name: 'waveshaped trousers with crochet hat and crochet bag',
    price: 59.99,
    type: 'fashion',
    api_id: 'prod_Q1OujtTAwoA3gQ',
  },
  {
    id: 9,
    name: 'patchwork pullover with crochet hat',
    price: 49.99,
    type: 'fashion',
    api_id: 'prod_Q1Ou13gW92noWI',
  },
  {
    id: 10,
    name: 'patchwork top with crochet hat',
    price: 44.99,
    type: 'fashion',
    api_id: 'prod_Q1OvAzCMKhdibh',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO products
  (product_name, type, price, api_id)
  VALUES
  (${product.name}, ${product.type}, ${product.price}, ${product.api_id})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
    DELETE FROM products
    WHERE id=${product.id};`;
  }
}
