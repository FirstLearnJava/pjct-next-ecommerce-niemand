import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { getSingleProductsById } from '../../database/products';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] };
};
//{ params: { productId: '1' }, searchParams: {} }
export default async function ProductsPage(props: Props) {
  const singleProduct = await getSingleProductsById(
    Number(props.params.productId),
  );

  if (!singleProduct) {
    notFound();
  }
  return (
    <Fragment>
      <Link href="/products">Go back</Link>
      <br />
      <h1>{singleProduct.productName}</h1>
      <br />
      {
        <Image
          src={`/pottery/${JSON.stringify(singleProduct.id)}.png`}
          width="200"
          height="200"
          alt={singleProduct.productName}
        ></Image>
      }
      <p>price: {singleProduct.price}</p>
      <ProductQuantityForm productId={Number(props.params.productId)} />
      <Link href="/cart">go to cart</Link>
    </Fragment>
  );
}
