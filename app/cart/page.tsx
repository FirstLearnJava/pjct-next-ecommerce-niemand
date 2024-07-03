import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import SingleProducts from './SingleProducts';
import Link from 'next/link';
import TotalPrice from './TotalPrice';
import CreateSessions from './CreateSessions';
import { getSingleProductsById } from '../database/products';
import Stripe from 'stripe';
import { stripeClient } from '../utils/stripe';
import Image from 'next/image';

export default async function CartPage() {
  type CartProduct = { id: number; quantity: number };
  type CartProducts = CartProduct[] | undefined;
  type BodyProduct = { price: string; quantity: number };

  type Body = BodyProduct[];

  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts: CartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  const body: Body = [];

  if (cartProducts) {
    const asyncCartProducts = await Promise.all(
      cartProducts.map(async (cartProduct: CartProduct) => {
        const singleProduct = await getSingleProductsById(cartProduct.id);
        const retrievedItems = await stripeClient.products.retrieve(
          singleProduct!.apiId,
          {
            expand: ['default_price'],
          },
        );

        const bodyProduct: BodyProduct = {
          price: (retrievedItems.default_price as Stripe.Price).id,
          quantity: cartProduct.quantity,
        };
        body.push(bodyProduct);
      }),
    );
  }

  if (cartProducts) {
    return (
      <div className="mt-[103px] bg-tertiary">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mt-20 font-inknut text-[36px]">Your cart</h2>
          <Link
            href="/products"
            className=" underline font-inknut text-[20px] mt-7"
          >
            Continue shopping
          </Link>
          <section className="w-[70%] mt-24 mr-[1%]">
            <div className="border-b-2 flex justify-between">
              <div>PRODUCT</div>
              <div className="flex gap-16  mr-[3px]">
                <p className="w-[100px] text-right mr-1">PRICE</p>
                <p className="w-[140px] text-center">QUANTITY</p>
                <p className="w-[80px] mr-4 text-right">TOTAL</p>
              </div>
            </div>
            <SingleProducts />
          </section>
          <section className="flex flex-col items-end w-[70%] mr-[1%] mb-14">
            <TotalPrice cartProducts={cartProducts} />
            <CreateSessions body={body} />
            <div className="flex gap-4 mt-4">
              <Image
                src="/cartIcons/googlePayIcon.svg"
                width={102}
                height={32}
                alt="google pay icon"
              />
              <Image
                src="/cartIcons/linkIcon.svg"
                width={103}
                height={32}
                alt="link icon"
              />
              <div className="flex gap-[6px] ml-2 *:rounded-md">
                <Image
                  src="/cartIcons/visaIcon.svg"
                  width={52}
                  height={30}
                  alt="visa icon"
                />
                <Image
                  src="/cartIcons/mastercardIcon.svg"
                  width={52}
                  height={34}
                  alt="mastercard icon"
                />
                <Image
                  src="/cartIcons/americanExpressIcon.svg"
                  width={52}
                  height={34}
                  alt="american-express icon"
                />
                <Image
                  src="/cartIcons/jcbIcon.svg"
                  width={52}
                  height={34}
                  alt="jcb icon"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-[103px]">
        <Link href="/products">Back to products</Link>
        <div className="flex flex-col items-center justify-center">
          <SingleProducts />
          <TotalPrice cartProducts={cartProducts} />
        </div>
      </div>
    );
  }
}
