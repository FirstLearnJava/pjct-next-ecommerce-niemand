import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-tertiary">
      <div className="flex flex-col mt-[103px] w-[75%] mx-[12.5%] font-inknut mb-28">
        <h1 className="mt-16 text-center text-[32px]">About Us</h1>
        <div className="flex mt-20">
          <div className="ml-10">
            <Image
              src="/aboutpage/femaleSculptor.jpg"
              width={432}
              height={650}
              alt="female sculptor"
              className="rounded"
            />
            <p className="text-right ml-10 text-[10px]">designed by freepik</p>
          </div>
          <div className="w-[800px] pl-[70px] pr-[110px]">
            <p className="leading-9 mt-6">
              Paula Dreher grew up on her family's herbal farm located in the
              idyllic Mühlviertel, in the province of Upperaustria. She
              completed her studies at the viennese academy of visual arts and
              earned her BA in painting and handcrafting. In 2023, she returned
              to the ranch where she now lives and works.
            </p>
            <div className="border-b-[1px] border-gray-700 my-[30px]"></div>
            <p className="leading-9 font-alegreya italic text-xl tracking-wide font-normal">
              “I specialized in hand-thrown ceramics, which allows me to infuse
              my personal touch and attention to detail into every creation. The
              process involves several stages: shaping the clay on the wheel,
              allowing it to dry, and then bisque firing it to harden the clay.
              After that, I carefully apply glazes and perform a final
              high-temperature firing to achieve the desired finish. Each piece
              tells a story of patience, skill, and passion, reflecting the
              beauty of handcrafted art.”
            </p>
            <p className="text-center mt-4">-Paula</p>
          </div>
        </div>
      </div>
    </div>
  );
}
