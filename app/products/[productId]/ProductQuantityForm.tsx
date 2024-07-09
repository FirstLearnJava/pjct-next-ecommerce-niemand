'use client';

import { ChangeEvent, useState } from 'react';
import AddOrUpdateQuantity from './actions';
import { Product } from '../../../migrations/1707932515-createTableProducts';
type ProductQuantityFormProps = {
  productId: number;
  singleProduct: Product;
};

export default function ProductQuantityForm(props: ProductQuantityFormProps) {
  const [quantity, setQuantity] = useState(1);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.currentTarget.value));
  }
  return (
    <form className="mt-4">
      <div className="flex justify-center gap-8 items-center">
        <label htmlFor="quantityInput">
          Quantity:
          <input
            id="quantityInput"
            value={quantity}
            onChange={handleChange}
            type="number"
            style={{ width: '40px' }}
            className=" border-2 border-secondary rounded-lg text-center ml-2"
          ></input>
        </label>
        <p>
          € <span>{props.singleProduct.price}</span>/pcs
        </p>
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          formAction={async () =>
            await AddOrUpdateQuantity(props.productId, quantity)
          }
          className="bg-secondary w-[120px] h-9 rounded-md text-white font-inknut font-semibold text-[12px] uppercase"
        >
          add to cart
        </button>
      </div>
    </form>
  );
}
