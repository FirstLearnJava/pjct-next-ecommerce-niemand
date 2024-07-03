import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'cups and plates set',
    price: 44.99,
    type: 'novelty',
    api_id: 'prod_Q1Ok1xFzAbpmjy',
  },
  {
    id: 2,
    name: 'green coffee cups',
    price: 23.99,
    type: 'cup',
    api_id: 'prod_Q1OnpSihOeXVRT',
  },
  {
    id: 3,
    name: 'blue cylindric pot',
    price: 9.99,
    type: 'novelty',
    api_id: 'prod_Q1Oqu3KurdDGtz',
  },
  {
    id: 4,
    name: 'blue breakfast plate',
    price: 9.99,
    type: 'novelty',
    api_id: 'prod_Q1Ory04DNPLgO3',
  },
  {
    id: 5,
    name: 'white and blue cast coffee cups',
    price: 28.49,
    type: 'cup',
    api_id: 'prod_Q1OsQ7e43MlvFe',
  },
  {
    id: 6,
    name: 'cappuccino cups',
    price: 32.99,
    type: 'cup',
    api_id: 'prod_QMmdYEzB2VD9IF',
  },
  {
    id: 7,
    name: 'blue bowl',
    price: 19.99,
    type: 'bowl',
    api_id: 'prod_QMmefQdhENtN4W',
  },
  {
    id: 8,
    name: 'colorful vase',
    price: 44.99,
    type: 'novelty',
    api_id: 'prod_QMmfwuhtscWUZk',
  },
  {
    id: 9,
    name: 'curvy vase',
    price: 29.99,
    type: 'novelty',
    api_id: 'prod_QMmgiXDRdpc3mF',
  },
  {
    id: 10,
    name: 'dark cups set',
    price: 54.99,
    type: 'cup',
    api_id: 'prod_QMmhLzuUm0NoRc',
  },
  {
    id: 11,
    name: 'gravy boat',
    price: 14.99,
    type: 'novelty',
    api_id: 'prod_QMmiv6U27rlIhe',
  },
  {
    id: 12,
    name: 'green bowl',
    price: 29.99,
    type: 'bowl',
    api_id: 'prod_QMmjLL9cE0qlzE',
  },
  {
    id: 13,
    name: 'grooved green cup',
    price: 19.99,
    type: 'cup',
    api_id: 'prod_QMmj5dx7wW5w8q',
  },
  {
    id: 14,
    name: 'halloween cups',
    price: 34.99,
    type: 'cup',
    api_id: 'prod_QMmktfUJhnVh9l',
  },
  {
    id: 15,
    name: 'italian set',
    price: 54.99,
    type: 'novelty',
    api_id: 'prod_QMmlOKo5X8zFyN',
  },
  {
    id: 16,
    name: 'natural cups set',
    price: 49.99,
    type: 'cup',
    api_id: 'prod_QMmmA08ssNfazB',
  },
  {
    id: 17,
    name: 'yellow bowl',
    price: 29.99,
    type: 'bowl',
    api_id: 'prod_QMmmvPf9mDyx9B',
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
