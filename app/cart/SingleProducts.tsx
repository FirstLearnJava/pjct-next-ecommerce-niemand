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
            <div className="border-b-2 md:flex justify-between py-8">
              <div className="flex flex-col items-center md:flex-row">
                <p className="font-fraunces md:hidden uppercase text-[16px] mb-4">
                  {databaseProduct!.productName}
                </p>
                <Image
                  src={`/pottery/${camelcase(databaseProduct!.productName)}.jpg`}
                  width="130"
                  height="130"
                  alt={databaseProduct!.productName}
                  className="rounded-md"
                ></Image>
                <div className="md:ml-7 md:mt-7 uppercase ">
                  <p className="font-fraunces hidden md:inline">
                    {databaseProduct!.productName}
                  </p>
                  <div className="flex mt-7 gap-10 items-center ">
                    <RemoveButton id={cartProduct.id} />
                    <ChangeQuantity cartProductQuantity={cartProduct} />
                    <p className="md:hidden font-medium text-sm w-[62px] text-right">
                      €{' '}
                      {(databaseProduct!.price * cartProduct!.quantity).toFixed(
                        2,
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-col md:flex-row md:gap-16 md:items-center font-fraunces">
                <p className=" md:w-[100px] text-right mr-1">
                  € {databaseProduct!.price}
                </p>
                <div className="flex md:w-[140px] gap-[8px]">
                  <p className="text-right w-[70px]">
                    {cartProduct.quantity} pc(s)
                  </p>
                  <ChangeQuantity cartProductQuantity={cartProduct} />
                </div>
                <p className="md:w-[80px] text-right mr-4">
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
