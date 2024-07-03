'use client';

import { useState } from 'react';
import UpdateQuantity from './AddOrUpdateQuantity';

type cartProductQuantity = {
  cartProductQuantity: { id: number; quantity: number };
};

export default function ChangeQuantity(props: cartProductQuantity) {
  const [quantity, setQuantity] = useState(props.cartProductQuantity.quantity);

  return (
    <form>
      <div className="flex gap-[4px]">
        <button
          onClick={() => {
            if (quantity >= 2) setQuantity(quantity - 1);
          }}
          formAction={async () =>
            await UpdateQuantity(props.cartProductQuantity.id, quantity)
          }
          className="bg-secondary w-[22px] h-[22px] rounded-md text-white font-inknut text-[17px] uppercase"
        >
          -
        </button>
        <button
          onClick={() => {
            if (quantity >= 1) setQuantity(quantity + 1);
          }}
          formAction={async () =>
            await UpdateQuantity(props.cartProductQuantity.id, quantity)
          }
          className="bg-secondary w-[22px] h-[22px] rounded-md text-white font-inknut font-semibold text-[17px] uppercase"
        >
          +
        </button>
      </div>
    </form>
  );
}
