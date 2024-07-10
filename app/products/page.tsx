import { getProducts } from '../database/products';
import Image from 'next/image';
import ProductSection from './ProductSection';
import { Product } from '../../migrations/1707932515-createTableProducts';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] };
};

export default async function ProductsPage(props: Props) {
  const products: Product[] = await getProducts();

  return (
    <div className="mt-[103px] flex flex-col bg-tertiary">
      <section className="mt-12 sm:pb-[20px] border-b-2 border-secondary">
        <div className="mx-[12.5%] mb-28">
          <h2 className="text-center font-inknut sm:text-[36px] text-[32px] leading-10 mt-8">
            Some of our favorites
          </h2>
          <div className="lg:flex lg:justify-between lg:gap-10 grid  sm:grid-cols-2 sm:gap-[6%] gap-10 justify-center sm:mt-[84px] mt-14">
            <Link href={`/products/8`}>
              <Image
                src={'/pottery/colorfulVase.jpg'}
                width={260}
                height={260}
                alt={`colorful vase as favorite pottery item`}
                className="rounded mx-auto"
              />
            </Link>
            <Link href={`/products/17`}>
              <Image
                src={'/pottery/yellowBowl.jpg'}
                width={260}
                height={260}
                alt="yellow bowl as favorite pottery item"
                className="rounded mx-auto"
              />
            </Link>
            <Link href={`/products/10`} className="lg:hidden xl:block">
              <Image
                src={'/pottery/darkCupsSet.jpg'}
                width={260}
                height={260}
                alt="dark cups as favorite pottery items"
                className="rounded mx-auto"
              />
            </Link>
            <Link href={`/products/15`}>
              <Image
                src={'/pottery/italianSet.jpg'}
                width={260}
                height={260}
                alt="italian set as favorite pottery items"
                className="rounded mx-auto"
              />
            </Link>
          </div>
        </div>
      </section>
      <ProductSection products={products} searchParams={props.searchParams} />
    </div>
  );
}
