import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import SingleProducts from './SingleProducts';
import Link from 'next/link';
import TotalPrice from './TotalPrice';
import CreateSessions from './CreateSessions';
import { getSingleProductsById } from '../database/products';
import Stripe from 'stripe';
import { stripeClient } from '../utils/stripe';

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
      <div>
        <Link href="/products">Back to products</Link>
        <SingleProducts />
        <TotalPrice cartProducts={cartProducts} />

        <CreateSessions body={body} />
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/products">Back to products</Link>
        <SingleProducts />
        <TotalPrice cartProducts={cartProducts} />
      </div>
    );
  }
}
