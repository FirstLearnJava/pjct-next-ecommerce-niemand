import { cache } from 'react';
import { sql } from './connect';
import { Product } from '../../migrations/1707932515-createTableProducts';

/* export const products = [
  { id: 1, name: 'cups and plates set', price: 24.99, type: 'pottery' },
  { id: 2, name: 'green coffee cups', price: 8.49, type: 'pottery' },
  { id: 3, name: 'blue cylindric pot', price: 9.99, type: 'pottery' },
  { id: 4, name: 'blue breakfast plate', price: 6.99, type: 'pottery' },
  {
    id: 5,
    name: 'white and blue cast coffee cups',
    price: 8.49,
    type: 'pottery',
  },
  { id: 6, name: 'blue dungaree trousers', price: 44.99, type: 'fashion' },
  { id: 7, name: 'tetrapack woven dress', price: 74.99, type: 'fashion' },
  {
    id: 8,
    name: 'waveshaped trousers with crochet hat and crochet bag',
    price: 59.99,
    type: 'fashion',
  },
  {
    id: 9,
    name: 'patchwork pullover with crochet hat',
    price: 49.99,
    type: 'fashion',
  },
  {
    id: 10,
    name: 'patchwork top with crochet hat',
    price: 44.99,
    type: 'fashion',
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id == id);
}*/

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT * FROM products;`;
  return products;
});

export const getSingleProductsById = cache(async (id: number) => {
  const [singleProduct] = await sql<Product[]>`
  SELECT * FROM products
  WHERE id = ${id};`;
  return singleProduct;
});
