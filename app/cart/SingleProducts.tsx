import { stripeClient } from '../utils/stripe';
import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getSingleProductsById } from '../database/products';
import RemoveButton from './RemoveButton';
import Image from 'next/image';
import camelcase from 'camelcase';
import ChangeQuantity from './ChangeQuantity';

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
            <div className="border-b-2 flex justify-between py-5">
              <div className="flex">
                <Image
                  src={`/pottery/${camelcase(databaseProduct!.productName)}.jpg`}
                  width="130"
                  height="130"
                  alt={databaseProduct!.productName}
                  className="rounded-md"
                ></Image>
                <div className="ml-7 mt-7 uppercase ">
                  <p className=" font-fraunces">
                    {databaseProduct!.productName}
                  </p>
                  <RemoveButton id={cartProduct.id} />
                </div>
              </div>

              <div className="flex gap-16 items-center font-fraunces">
                <p className="w-[100px] text-right mr-1">
                  € {databaseProduct!.price}
                </p>
                <div className="flex w-[140px] gap-[8px]">
                  <p className="text-right w-[70px]">
                    {cartProduct.quantity} pc(s)
                  </p>
                  <ChangeQuantity cartProductQuantity={cartProduct} />
                </div>
                <p className="w-[80px] text-right mr-4">
                  €{' '}
                  {(databaseProduct!.price * cartProduct!.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
