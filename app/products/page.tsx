import Link from 'next/link';
import { Fragment } from 'react';
import { getProducts } from '../database/products';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <Fragment>
      <Link href="/">Go back</Link>
      <br />
      <h1>pottery</h1>
      <ul>
        {products.map((product) => {
          if (product.type === 'pottery')
            return (
              <li key={`${product.productName} with id:${product.id}`}>
                <Link href={`/products/${product.id}`}>
                  {product.productName}
                </Link>
              </li>
            );
        })}
      </ul>
      <h1>fashion</h1>
      <ul>
        {products.map((product) => {
          if (product.type === 'fashion')
            return (
              <li key={`${product.productName} with id:${product.id}`}>
                <Link href={`/products/${product.id}`}>
                  {product.productName}
                </Link>
              </li>
            );
        })}
      </ul>
    </Fragment>
  );
}
