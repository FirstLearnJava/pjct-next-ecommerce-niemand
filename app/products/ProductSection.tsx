'use client';

import { useEffect, useRef, useState } from 'react';
import camelcase from 'camelcase';
import { Product } from '../../migrations/1707932515-createTableProducts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  products: Product[];
  searchParams: { [key: string]: string | string[] };
};

export default function ProductSection(props: Props) {
  const [selectedOption, setSelectedOption] = useState('all products');

  const productsFilter = props.products.filter((product: Product) => {
    return product.type === selectedOption;
  });

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const productType = props.searchParams.producttype;
    if (
      typeof productType === 'string' &&
      ['cup', 'bowl', 'novelty', 'all products'].includes(productType) &&
      targetRef.current
    ) {
      setSelectedOption(productType);
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      const url = new URL(window.location.href);
      url.searchParams.delete('producttype');
      window.history.replaceState(null, '', url.toString());
    }
  }, [props.searchParams.producttype]);

  return (
    <section ref={targetRef}>
      <h2 className="text-center sm:mt-32 mt-24 mb-14   font-inknut text-[38px]">
        Collection
      </h2>
      <div className=" border-y-2">
        <div className="mx-[12.5%] text-[18px]">
          Filter by{' '}
          <select
            onChange={(e) => {
              setSelectedOption(e.currentTarget.value);
            }}
            value={selectedOption}
            className=" border-2 rounded-md border-gray-400 font-fraunces text-[16px]"
          >
            <option value="all products">all products</option>
            <option value="cup">cups</option>
            <option value="bowl">bowls</option>
            <option value="novelty">novelties</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <div className="grid sm:grid-cols-3 grid-cols-2 mx-[12.5%] *:rounded-md lg:gap-24 gap-[24px]">
          {selectedOption === 'all products'
            ? props.products.map((product: Product) => (
                <div
                  key={`product-${product.id}`}
                  className="flex flex-col items-start sm:items-center  font-fraunces  sm:mb-4 mb-3"
                >
                  <Link href={`/products/${JSON.stringify(product.id)}`}>
                    <Image
                      src={`/pottery/${camelcase(product.productName)}.jpg`}
                      width={270}
                      height={270}
                      alt={product.productName}
                      className=" rounded"
                    />
                  </Link>
                  <p className="sm:mt-3 mt-1 sm:text-center ">
                    <Link
                      href={`/products/${JSON.stringify(product.id)}`}
                      className="sm:text-[18px] lg:text-[20px] text-[17px]  "
                    >
                      {product.productName}
                    </Link>
                  </p>
                  <p className="sm:text-[16px] text-[15px] mt-1">
                    <Link href={`/products/${JSON.stringify(product.id)}`}>
                      € {product.price}
                    </Link>
                  </p>
                </div>
              ))
            : productsFilter.map((product: Product) => (
                <div
                  key={`product-${product.id}`}
                  className="flex flex-col items-start sm:items-center sm:mb-4 mb-3 font-fraunces"
                >
                  <Link href={`/products/${JSON.stringify(product.id)}`}>
                    <Image
                      src={`/pottery/${camelcase(product.productName)}.jpg`}
                      width={270}
                      height={270}
                      alt={product.productName}
                      className="rounded"
                    />
                  </Link>
                  <p className="sm:mt-3 mt-1 sm:text-center">
                    <Link
                      href={`/products/${JSON.stringify(product.id)}`}
                      className="sm:text-[18px] lg:text-[20px] text-[17px]"
                    >
                      {product.productName}
                    </Link>
                  </p>
                  <p className="sm:text-[16px] text-[15px] mt-1">
                    <Link href={`/products/${JSON.stringify(product.id)}`}>
                      € {product.price}
                    </Link>
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
