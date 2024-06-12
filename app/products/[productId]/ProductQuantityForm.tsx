'use client';

import { ChangeEvent, useState } from 'react';
import AddOrUpdateQuantity from './actions';
type ProductQuantityFormProps = {
  productId: number;
};

export default function ProductQuantityForm(props: ProductQuantityFormProps) {
  const [quantity, setQuantity] = useState(1);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.currentTarget.value));
  }
  return (
    <form>
      <label htmlFor="quantityInput">
        quantity:
        <input
          id="quantityInput"
          value={quantity}
          onChange={handleChange}
          type="number"
          style={{ width: '50px' }}
        ></input>
      </label>
      <br />
      <button
        formAction={async () =>
          await AddOrUpdateQuantity(props.productId, quantity)
        }
      >
        add to cart
      </button>
    </form>
  );
}
