import Link from 'next/link';
import React from 'react';

export default function SuccessPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-screen  items-center flex flex-col justify-center font-fraunces"
      style={{
        backgroundImage: "url('/successpageBackground.jpg')",
      }}
    >
      <h1 className="-mt-40 text-4xl ">Thank you for your purchase!</h1>
      <p className="w-[400px] text-center mt-7 text-xl">
        We will send you an email with your order confirmation and tracking
        number.
      </p>
      <Link href="/products" className="mt-5 text-lg hover:scale-105">
        Keep shopping!
      </Link>
    </div>
  );
}

/* import Link from 'next/link';
import React from 'react';

export default function SuccessPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/successpageBackground.jpg')",
      }}
    >
      <h1 className="text-4xl mb-4">Thank you for your purchase!</h1>
      <p className="text-lg mb-4">
        We will send you an email with your order confirmation and tracking
        number.
      </p>
      <Link href="/products">Keep shopping!</Link>
    </div>
  );
}
 */
