'use server';

import { cookies } from 'next/headers';
import getCookie from '../utils/cookies';
import parseJson from '../utils/json';

export default async function RemoveItem(id: number) {
  const cartCookies = getCookie('productQuantities');
  const JsonCartCookies = parseJson(cartCookies);

  type CookieObject = { id: number; quantity: number };

  const singleCookieIndex = JsonCartCookies.findIndex(
    (object: CookieObject) => object.id === id,
  );
  JsonCartCookies.splice(singleCookieIndex, 1);

  if (JsonCartCookies.length === 0) {
    cookies().delete('productQuantities');
  } else {
    cookies().set('productQuantities', JSON.stringify(JsonCartCookies));
  }
}
