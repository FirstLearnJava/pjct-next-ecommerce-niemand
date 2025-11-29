'use client';

import React, { useEffect, useState } from 'react';
import { ProductQuantity } from './actions';
import Cookies from 'js-cookie';
import Image from 'next/image';

function BasketTotal() {
  const [basketTotal, setBasketTotal] = useState(0);
  const cookies = Cookies.get('productQuantities') || '[{"quantity":0}]';
  console.log(basketTotal);

  useEffect(() => {
    const jsonfiedCookies = JSON.parse(cookies);

    const total = jsonfiedCookies.reduce(
      (previous: number, product: ProductQuantity) => {
        return previous + product.quantity;
      },
      0,
    );

    setBasketTotal(total);
  }, [cookies]);
  return (
    <div className="relative bottom-[1px]">
      <Image
        src={'/header/cartSymbolBlack.svg'}
        alt="cart symbol"
        width={25}
        height={25}
        className="md:group-hover/basket:scale-110"
      />
      {basketTotal >= 1 && basketTotal <= 9 && (
        <span
          className={`text-secondary absolute top-[4px] right-[9px] font-mono text-[13px] font-extrabold md:group-hover/basket:scale-110`}
        >
          {basketTotal}
        </span>
      )}
      {basketTotal >= 10 && basketTotal <= 99 && (
        <span
          className={`text-secondary absolute top-[4px] right-[6px] font-mono  font-extrabold text-[13px] md:group-hover/basket:scale-110`}
        >
          {basketTotal}
        </span>
      )}
      {basketTotal > 99 && (
        <span
          className={`text-secondary absolute top-[3px] right-[3px] text-[11px] font-mono  font-extrabold md:group-hover/basket:scale-110`}
        >
          99+
        </span>
      )}
    </div>
  );
}

export default BasketTotal;
