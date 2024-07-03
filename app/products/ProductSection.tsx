'use client';

import { useEffect, useRef, useState } from 'react';
import camelcase from 'camelcase';
import { Product } from '../../migrations/1707932515-createTableProducts';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      <h2 className="text-center mt-32 mb-14   font-inknut text-[38px]">
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
        <div className="grid grid-cols-3 mx-[12.5%] *:rounded-md gap-24 font-oleo  ">
          {selectedOption === 'all products'
            ? props.products.map((product: Product) => (
                <div
                  key={`product-${product.id}`}
                  className="flex flex-col items-center mb-4"
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
                  <p className="text-[17px] mt-3">
                    <Link href={`/products/${JSON.stringify(product.id)}`}>
                      {product.productName}
                    </Link>
                  </p>
                  <p className="text-[14px]">
                    <Link href={`/products/${JSON.stringify(product.id)}`}>
                      € {product.price}
                    </Link>
                  </p>
                </div>
              ))
            : productsFilter.map((product: Product) => (
                <div
                  key={`product-${product.id}`}
                  className="flex flex-col items-center mb-4"
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
                  <p className="text-[17px] mt-3">
                    <Link href={`/products/${JSON.stringify(product.id)}`}>
                      {product.productName}
                    </Link>
                  </p>
                  <p className="text-[14px]">
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
