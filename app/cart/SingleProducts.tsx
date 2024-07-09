import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getSingleProductsById } from '../database/products';
import RemoveButton from './RemoveButton';
import Image from 'next/image';
import camelcase from 'camelcase';
import ChangeQuantityMobileDevices from './ChangeQuantityMobileDevices';
import ChangeQuantityDesktopDevices from './ChangeQuantityDesktopDevices';
import Link from 'next/link';

export default async function SingleProducts() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  type CartProduct = { id: number; quantity: number };

  return (
    <div>
      {cartProducts?.map(async (cartProduct: CartProduct) => {
        const databaseProduct = await getSingleProductsById(cartProduct.id);
        return (
          <div key={`cartProduct-${cartProduct.id}`}>
            <div className="border-b-2 lg:flex justify-between py-8">
              <div className="flex flex-col items-center lg:flex-row">
                <p className="font-fraunces lg:hidden uppercase text-[16px] mb-4">
                  {databaseProduct!.productName}
                </p>
                <Link
                  href={`/products/${databaseProduct?.id}`}
                  className="min-w-[130px]"
                >
                  <Image
                    src={`/pottery/${camelcase(databaseProduct!.productName)}.jpg`}
                    width="130"
                    height="130"
                    alt={databaseProduct!.productName}
                    className="rounded-lg"
                  ></Image>
                </Link>
                <div className="lg:ml-7 lg:mt-1 uppercase ">
                  <p className="font-fraunces hidden lg:inline-block h-[80px]">
                    {databaseProduct!.productName}
                  </p>
                  <div className="flex mt-6 lg:mt-0 sm:gap-10 gap-6 items-center ">
                    <RemoveButton id={cartProduct.id} />
                    <ChangeQuantityMobileDevices
                      cartProductQuantity={cartProduct}
                    />
                    <p className="lg:hidden font-medium text-sm w-[62px] text-right">
                      €{' '}
                      {(databaseProduct!.price * cartProduct!.quantity).toFixed(
                        2,
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col lg:flex-row lg:gap-16 lg:items-center font-fraunces">
                <p className=" lg:w-[100px] text-right mr-1">
                  € {databaseProduct!.price}
                </p>
                <div className="flex lg:w-[140px] gap-[8px]">
                  <p className="text-right w-[70px]">
                    {cartProduct.quantity} pc(s)
                  </p>
                  <ChangeQuantityDesktopDevices
                    cartProductQuantity={cartProduct}
                  />
                </div>
                <p className="lg:w-[80px] text-right mr-4">
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
