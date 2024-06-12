import { stripeClient } from '../utils/stripe';
import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getSingleProductsById } from '../database/products';
import RemoveButton from './RemoveButton';
import Image from 'next/image';

export default async function SingleProducts() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  type CartProduct = { id: number; quantity: number };

  if (!cartProducts) {
    return <div>Your cart is empty. Please add a product.</div>;
  }

  return (
    <div>
      {cartProducts?.map(async (cartProduct: CartProduct) => {
        const databaseProduct = await getSingleProductsById(cartProduct.id);
        return (
          <div key={`cartProduct-${cartProduct.id}`}>
            <br />
            <div>product: {databaseProduct!.productName}</div>
            <Image
              src={`/pottery/${cartProduct.id}.png`}
              width="100"
              height="100"
              alt={databaseProduct!.productName}
            ></Image>
            <div>price: ${databaseProduct!.price}</div>
            <div>quantity: {cartProduct.quantity} piece(s)</div>
            <RemoveButton id={cartProduct.id} />
          </div>
        );
      })}
    </div>
  );
}
