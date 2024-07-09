'use client';

import { useState } from 'react';
import UpdateQuantity from './AddOrUpdateQuantity';

type cartProductQuantity = {
  cartProductQuantity: { id: number; quantity: number };
};

export default function ChangeQuantityMobileDevices(
  props: cartProductQuantity,
) {
  const [quantity, setQuantity] = useState(props.cartProductQuantity.quantity);

  return (
    <form className="lg:hidden">
      <div className="flex gap-2 lg:gap-[4px] items-center">
        <button
          onClick={() => {
            if (quantity >= 2) setQuantity(quantity - 1);
          }}
          formAction={async () =>
            await UpdateQuantity(props.cartProductQuantity.id, quantity)
          }
          className="bg-secondary lg:w-[22px] lg:h-[22px] w-[28px] h-[28px] rounded-lg text-white font-inknut text-[17px] uppercase"
        >
          -
        </button>
        <p className=" lg:hidden font-medium text-[16px] w-[30px] text-center">
          {props.cartProductQuantity.quantity}{' '}
        </p>
        <button
          onClick={() => {
            if (quantity >= 1) setQuantity(quantity + 1);
          }}
          formAction={async () =>
            await UpdateQuantity(props.cartProductQuantity.id, quantity)
          }
          className="bg-secondary lg:w-[22px] lg:h-[22px] w-[28px] h-[28px] rounded-lg text-white font-inknut font-semibold text-[17px] uppercase"
        >
          +
        </button>
      </div>
    </form>
  );
}
