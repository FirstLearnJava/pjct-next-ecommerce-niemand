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
    await Promise.all(
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
        <div className=" flex flex-col items-center justify-center">
          <h2 className="md:mt-20 mt-20 font-inknut md:text-[36px] text-[30px]">
            Your cart
          </h2>
          <Link
            href="/products"
            className=" underline font-inknut md:text-[20px] md:mt-7 mt-3"
          >
            Continue shopping
          </Link>
          <section className="md:w-[70%] w-[90%] mt-16 md:mt-24 mr-[1%] md:text-[16px] text-[12px]">
            <div className=" border-b-2 md:flex justify-between">
              <p className="hidden lg:inline">PRODUCT</p>
              <div className="hidden lg:flex lg:gap-16  mr-[3px]">
                <p className="lg:w-[100px] text-right mr-1">PRICE</p>
                <p className="lg:w-[140px] text-center">QUANTITY</p>
                <p className="lg:w-[80px] mr-4 text-right">TOTAL</p>
              </div>
            </div>
            <SingleProducts />
          </section>
          <section className="flex flex-col items-end md:w-[70%] w-[90%] md:mr-[1%] md:mb-14 mb-12 md:mt-3 mt-8 md:m-0 px-[14px]">
            <TotalPrice cartProducts={cartProducts} />
            <CreateSessions body={body} />
            <div className="flex gap-4 md:mt-4 mt-5 flex-wrap-reverse justify-end">
              <Image
                src="/cartIcons/googlePayIcon.svg"
                width={102}
                height={32}
                alt="google pay icon"
                className=" md:w-[102px] md:h-[32px]"
              />
              <Image
                src="/cartIcons/linkIcon.svg"
                width={103}
                height={32}
                alt="link icon"
                className=" md:w-[103px] md:h-[32px]"
              />
              <div className="flex gap-[6px] ml-2 *:rounded-md">
                <Image
                  src="/cartIcons/visaIcon.svg"
                  width={52}
                  height={30}
                  alt="visa icon"
                  className=" md:w-[52px] md:h-[30px]"
                />
                <Image
                  src="/cartIcons/mastercardIcon.svg"
                  width={52}
                  height={34}
                  alt="mastercard icon"
                  className=" md:w-[52px] md:h-[34px]"
                />
                <Image
                  src="/cartIcons/americanExpressIcon.svg"
                  width={52}
                  height={34}
                  alt="american-express icon"
                  className="md:w-[52px] md:h-[34px]"
                />
                <Image
                  src="/cartIcons/jcbIcon.svg"
                  width={52}
                  height={34}
                  alt="jcb icon"
                  className="md:w-[52px] md:h-[34px]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" mt-[112px] md:mt-[102px] h-full bg-tertiary">
        <div className="flex justify-start pt-6">
          <Link
            href="/products?producttype=all%20products"
            className="md:ml-14 ml-8 font-medium"
          >{`← all products`}</Link>
        </div>
        <div className=" flex flex-col items-center mt-6 font-fraunces text-lg ">
          <Link href="/products?producttype=all%20products">
            <Image
              src="/cartIcons/emptyCartIcon.png"
              width={250}
              height={250}
              alt="empy cart icon"
              className="rounded-lg lg:w-[280px] md:hover:scale-105"
            ></Image>
          </Link>
          <p className="text-center mx-[10%] mb-20 lg:text-xl">
            Your cart is empty! Let's change that!
          </p>
        </div>
      </div>
    );
  }
}
