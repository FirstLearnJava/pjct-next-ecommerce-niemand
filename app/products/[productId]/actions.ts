'use server';

import getCookie from '../../utils/cookies';
import parseJson from '../../utils/json';
import { cookies } from 'next/headers';

export default async function AddOrUpdateQuantity(
  id: number,
  quantity: number,
) {
  type ProductQuantity = { id: number; quantity: number };
  const productQuantityCookies = getCookie('productQuantities');
  const productQuantities: ProductQuantity[] = !productQuantityCookies
    ? []
    : (parseJson(productQuantityCookies) as ProductQuantity[]);

  const singleCookie = productQuantities.find((productQuantity) => {
    return productQuantity.id === id;
  });

  if (singleCookie) {
    if (quantity >= 0) {
      singleCookie.quantity = Number(singleCookie.quantity) + Number(quantity);
    }
  } else {
    productQuantities.push({ id: Number(id), quantity: quantity });
  }

  cookies().set('productQuantities', JSON.stringify(productQuantities));
}
