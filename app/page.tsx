import Image from 'next/image';
import ShapeDividerHomepageHeader from './shapeDivider/ShapeDividerHomepageHeader';
import ShapeDividerHomepageAbout from './shapeDivider/ShapeDividerHomepageAbout';
import Link from 'next/link';
import ShopNowButton from './components/ShopNowButton';

export default function HomePage() {
  /*   #fffdfb */
  return (
    <div className="bg-[#fffcf6] ">
      <div className="relative">
        <div>
          <div className="md:bg-cover md:block bg-center bg-no-repeat w-full md:h-screen-30px justify-center md:bg-hero bg-custom-gradient pb-[200px] md:pb-0">
            <section className="pt-[100px] md:px-[190px] mx-[5%] md:mx-0">
              <h1 className="font-inknut md:text-7xl text-[28px] text-center md:mt-[8%] mt-24 text-white">
                Welcome to{' '}
                <span className="font-oleoSwash text-[34px] md:text-[80px]">
                  Niemand
                </span>
              </h1>
              <h2 className="text-white font-inknut md:text-3xl text-base text-center md:mt-10 mt-4 ">
                Your merchant for unique and contemporary pottery
              </h2>
            </section>
          </div>
        </div>
        <ShapeDividerHomepageHeader />
        <section className="flex flex-col md:my-[10%] mb-[20%] mt-[20%] w-[75%]  mx-[12.5%]">
          <h2 className=" text-center font-oleo md:text-[40px] text-3xl md:mb-14 mb-7">
            Shop the Collection
          </h2>
          <div className="flex  ">
            <div className="flex md:flex-row flex-col gap-16 md:justify-between w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="relative md:w-[330px] md:h-[330px] w-[90%] h-[90%] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/cupsIcon.png"
                      className="rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 md:pt-[90px] pt-[70px] pl-1 text-white font-oleo md:text-3xl text-[28px] z-10 uppercase">
                      Cups
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="relative md:w-[330px] md:h-[330px] w-[90%] h-[90%] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/test3.jpeg"
                      className=" rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 md:pt-[90px] pt-[70px] text-white font-oleo md:text-3xl text-[28px] z-10 uppercase">
                      Novelty
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <div className="relative md:w-[330px] md:h-[330px] w-[90%] h-[90%] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/bowlsIconNew.jpg"
                      className=" rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 md:pt-[90px] pt-[70px] text-white font-oleo md:text-3xl text-[28px] z-10 uppercase">
                      Bowls
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
            </div>
          </div>
        </section>
        <ShapeDividerHomepageAbout />
        <section className="w-full flex justify-center bg-[#fff1de]">
          <div className="flex justify-center md:w-[75%] my-[10%] mx-[10%] md:mx-0">
            <Image
              alt="person modelling clay"
              width={500}
              height={750}
              src="/homepage/modellingClay.jpg"
              className="rounded-sm hidden md:block"
            />
            <div className=" md:ml-[120px] md:mr-[180px]">
              <Link href="/about" className="">
                <h2 className=" font-oleo text-3xl mb-6 hover:text-secondary text-center md:text-left mt-[10%] md:mt-0">
                  About <span className="font-oleoSwash">Niemand</span>
                </h2>
              </Link>
              <p className=" font-fraunces md:text-xl text-lg mb-7 leading-[2.25] text-center md:text-left">
                When we realized, how well our craftings were receive by family
                and friends, we got encouraged to create
                <span className="font-oleoSwash md:text-[26px] text-[22px]">
                  {' '}
                  Niemand
                </span>
                , so we can bring a smile to many more people.
              </p>
              <p className=" font-fraunces md:text-xl text-lg leading-[2.25] text-center md:text-left">
                We sell handmade crafts, you can only find here. If you demand
                ceramics especially crafted for you, we are the ones, who get it
                done!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
