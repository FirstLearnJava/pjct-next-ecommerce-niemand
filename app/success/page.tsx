import Link from 'next/link';
import React from 'react';

export default function SuccessPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-screen  items-center flex flex-col justify-center font-fraunces *:mx-[4%]"
      style={{
        backgroundImage: "url('/successpageBackground.jpg')",
      }}
    >
      <h1 className="xl:-mt-40 sm:-mt-36 -mt-32 lg:text-4xl sm:text-3xl text-2xl text-center ">
        Thank you for your purchase!
      </h1>
      <p className=" text-center lg:mt-7 sm:mt-4 mt-3 lg:text-xl sm:text-lg text-sm sm:mx-[12%]">
        We will send you an email with your order confirmation and tracking
        number.
      </p>
      <Link
        href="/products"
        className="lg:mt-5 sm:mt-3 mt-1 lg:text-lg text-sm hover:scale-105"
      >
        Keep shopping!
      </Link>
    </div>
  );
}
