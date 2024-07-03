'use server';

import { cookies } from 'next/headers';
import getCookie from '../utils/cookies';
import parseJson from '../utils/json';

export default async function UpdateQuantity(id: number, quantity: number) {
  type ProductQuantity = { id: number; quantity: number };
  const productQuantityCookies = getCookie('productQuantities');
  const productQuantities: ProductQuantity[] = !productQuantityCookies
    ? []
    : (parseJson(productQuantityCookies) as ProductQuantity[]);

  const singleCookie = productQuantities.find((productQuantity) => {
    return productQuantity.id === id;
  });

  if (singleCookie) {
    if (quantity >= 1) {
      singleCookie.quantity = Number(quantity);
    }
  }

  cookies().set('productQuantities', JSON.stringify(productQuantities));
}
