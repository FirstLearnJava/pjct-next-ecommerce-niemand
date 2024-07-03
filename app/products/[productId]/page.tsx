import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSingleProductsById } from '../../database/products';
import ProductQuantityForm from './ProductQuantityForm';
import camelcase from 'camelcase';

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
    <div className="mt-[126px]">
      <div className="flex justify-between">
        <Link
          href="/products?producttype=all%20products"
          className="ml-14 font-medium"
        >{`← all products`}</Link>
        <Link href="/cart" className="mr-14 font-medium">{`go to cart →`}</Link>
      </div>
      <div className=" flex flex-col items-center mt-8">
        <div>
          <h2 className="text-center font-oleo text-[20px] first-letter:capitalize">
            {singleProduct.productName}
          </h2>
          <Image
            src={`/pottery/${camelcase(singleProduct.productName)}.jpg`}
            width="260"
            height="260"
            alt={singleProduct.productName}
            className="rounded-md mt-2"
          ></Image>
          <ProductQuantityForm
            productId={Number(props.params.productId)}
            singleProduct={singleProduct}
          />
        </div>
      </div>
    </div>
  );
}
