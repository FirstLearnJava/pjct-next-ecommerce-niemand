import { getProducts } from '../database/products';
import Image from 'next/image';
import ProductSection from './ProductSection';
import { Product } from '../../migrations/1707932515-createTableProducts';
import Link from 'next/link';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] };
};

export default async function ProductsPage(props: Props) {
  const products: Product[] = await getProducts();

  return (
    <div className="mt-[103px] flex flex-col bg-tertiary">
      <section className="mt-12 pb-[20px] border-b-2 border-secondary">
        <div className="mx-[12.5%] mb-28">
          <h2 className="text-center font-inknut text-[36px] mt-8">
            Some of our favorites
          </h2>
          <div className="flex justify-between mt-[84px]">
            <Link href={`/products/8`}>
              <Image
                src={'/pottery/colorfulVase.jpg'}
                width={260}
                height={260}
                alt={`colorful vase as favorite pottery item`}
                className="rounded"
              />
            </Link>
            <Link href={`/products/17`}>
              <Image
                src={'/pottery/yellowBowl.jpg'}
                width={260}
                height={260}
                alt="yellow bowl as favorite pottery item"
                className="rounded"
              />
            </Link>
            <Link href={`/products/10`}>
              <Image
                src={'/pottery/darkCupsSet.jpg'}
                width={260}
                height={260}
                alt="dark cups as favorite pottery items"
                className="rounded"
              />
            </Link>
            <Link href={`/products/15`}>
              <Image
                src={'/pottery/italianSet.jpg'}
                width={260}
                height={260}
                alt="italian set as favorite pottery items"
                className="rounded"
              />
            </Link>
          </div>
        </div>
      </section>
      <ProductSection products={products} searchParams={props.searchParams} />
    </div>
  );
}
