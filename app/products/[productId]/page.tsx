import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSingleProductsById } from '../../database/products';
import ProductQuantityForm from './ProductQuantityForm';
import camelcase from 'camelcase';
import BasketTotal from './BasketTotal';

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
    <div className="md:mt-[126px] mt-[140px] mb-24 md:mb-14">
      <div className="flex justify-between">
        <Link
          href="/products?producttype=all%20products"
          className="md:ml-14 ml-8 font-medium"
        >
          <span className="text-[18px]">←</span> all products
        </Link>
        <Link href="/cart" className="md:mr-14 mr-8 font-medium flex ">
          go to &nbsp; <BasketTotal /> &nbsp;{' '}
          <span className="text-[18px]">→</span>
        </Link>
      </div>
      <div className=" flex flex-col items-center mt-8">
        <div>
          <h2 className="text-center font-fraunces uppercase text-[20px] first-letter:capitalize mt-6">
            {singleProduct.productName}
          </h2>
          <div className="flex justify-center">
            <Image
              src={`/pottery/${camelcase(singleProduct.productName)}.jpg`}
              width="260"
              height="260"
              alt={singleProduct.productName}
              className="rounded-md mt-5"
            ></Image>
          </div>
          <ProductQuantityForm
            productId={Number(props.params.productId)}
            singleProduct={singleProduct}
          />
        </div>
      </div>
    </div>
  );
}
