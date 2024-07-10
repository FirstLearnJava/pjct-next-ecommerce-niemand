import { cache } from 'react';
import { sql } from './connect';
import { Product } from '../../migrations/1707932515-createTableProducts';

/*
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
