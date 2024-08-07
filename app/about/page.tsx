import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-tertiary">
      <div className="flex flex-col mt-[103px] md:w-[75%] md:mx-[12.5%] mx-[10%] font-inknut md:mb-28 mb-20">
        <h1 className="mt-16 text-center text-[32px]">About Us</h1>
        <div className="flex flex-col lg:flex-row xl:items-center 2xl:items-start lg:mt-20 mt-14">
          <div className="lg:ml-10 mx-[6%] sm:mx-[15%] md:mx-[20%] lg:mx-0">
            <Image
              src="/aboutpage/sculptor.jpg"
              width={432}
              height={650}
              alt="female sculptor"
              className="rounded w-full lg:w-auto lg:mt-8 xl:mt-0"
            />
            <p className="text-right pr-1 lg:text-[10px] text-[9px]">
              designed by freepik
            </p>
          </div>
          <div className="lg:w-[800px] lg:pl-[70px] lg:pr-[110px]">
            <p className="leading-9 lg:mt-6 mt-10 text-center lg:text-left">
              Paula Dreher grew up on her family's herbal farm located in the
              idyllic Mühlviertel, in the province of Upperaustria. She
              completed her studies at the viennese academy of visual arts and
              earned her BA in painting and handcrafting. In 2023, she returned
              to the ranch where she now lives and works.
            </p>
            <div className="border-b-[1px] border-gray-700 my-[30px]"></div>
            <p className="leading-9 font-alegreya italic text-xl tracking-wide font-normal text-center lg:text-left">
              “I specialized in hand-thrown ceramics, which allows me to infuse
              my personal touch and attention to detail into every creation. The
              process involves several stages: shaping the clay on the wheel,
              allowing it to dry, and then bisque firing it to harden the clay.
              After that, I carefully apply glazes and perform a final
              high-temperature firing to achieve the desired finish. Each piece
              tells a story of patience, skill, and passion, reflecting the
              beauty of handcrafted art.”
            </p>
            <p className="text-center lg:mt-4 mt-7 pr-4">-Paula</p>
          </div>
        </div>
      </div>
    </div>
  );
}
