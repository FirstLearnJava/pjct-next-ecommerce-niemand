import Image from 'next/image';
import ShapeDividerHomepageHeader from './shapeDivider/ShapeDividerHomepageHeader';
import ShapeDividerHomepageAbout from './shapeDivider/ShapeDividerHomepageAbout';
import Link from 'next/link';
import ShopNowButton from './components/ShopNowButton';

export default function HomePage() {
  return (
    <div className="bg-[#fffcf6] ">
      <div className="relative">
        <div>
          <div className="xl:bg-cover xl:block bg-center bg-no-repeat w-full xl:h-screen-30px justify-center xl:bg-hero bg-custom-gradient pb-[200px] xl:pb-0">
            <section className="pt-[100px] lg:px-[190px] mx-[5%] md:mx-0">
              <h1 className="font-inknut sm:text-4xl md:text-[44px] lg:text-[56px] xl:text-7xl text-[28px] leading-9 text-center xl:mt-[50px] mt-24 text-white">
                Welcome to{' '}
                <span className="font-oleoSwash text-[34px] sm:text-[40px] md:text-[54px] lg:text-[70px] xl:text-[80px]">
                  Niemand
                </span>
              </h1>
              <h2 className="text-white font-inknut sm:text-lg md:text-xl lg:text-[32px] lg:leading-9 xl:text-4xl text-base text-center lg:mt-6 xl:mt-10 mt-4 ">
                Your merchant for unique and contemporary pottery
              </h2>
            </section>
          </div>
        </div>
        <ShapeDividerHomepageHeader />
        <section className="flex flex-col md:my-[10%] mb-[20%] mt-[12%] xl:mx-[12.5%] lg:mx-[10%] mx-[7.5%]">
          <h2 className=" text-center font-oleo md:text-[40px] text-3xl md:mb-14 mb-7">
            Shop the Collection
          </h2>
          <div className="flex">
            <div className="flex sm:flex-row flex-col sm:gap-[3%] sm:justify-between w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-[80%] flex justify-center sm:w-[170px] md:w-[186px]  lg:w-[260px]  xl:w-[300px] 2xl:w-[340px]  cursor-pointer">
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
                <div className="relative w-[80%] flex sm:w-[170px] md:w-[186px] lg:w-[260px] xl:w-[300px] 2xl:w-[330px] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/cylinderIcon.jpeg"
                      className=" rounded-md "
                    />
                    <p className="absolute flex justify-center items-center inset-0 md:pt-[90px] pt-[70px] text-white font-oleo md:text-3xl text-[28px] z-10 uppercase">
                      Novelty
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <div className="relative w-[80%] flex sm:w-[170px] md:w-[186px] lg:w-[260px] xl:w-[300px] 2xl:w-[330px] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/bowlsIcon.jpg"
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
          <div className="flex justify-center md:w-[75%] md:my-[16%] my-[8%] mx-[10%] sm:mx-[14%] md:mx-0">
            <Image
              alt="person modelling clay"
              width={500}
              height={750}
              src="/homepage/modellingClay.jpg"
              className="rounded-md hidden md:block md:w-[290px] lg:w-[330px] xl:w-[360px] 2xl:w-[460px]"
            />
            <div className=" md:ml-8 lg:ml-12 2xl:ml-[100px] md:w-[380px] xl:w-[540px]">
              <Link href="/about" className="">
                <h2 className=" font-oleo text-3xl 2xl:text-4xl mb-6 hover:text-secondary text-center md:text-left mt-[10%] md:mt-0">
                  About <span className="font-oleoSwash">Niemand</span>
                </h2>
              </Link>
              <p className=" font-fraunces lg:text-xl md:text-lg 2xl:text-2xl text-md mb-4 md:mb-7 leading-[2.25] text-center md:text-left">
                When we realized, how well our craftings were received by family
                and friends, we got encouraged to create
                <span className="font-oleoSwash lg:text-[25px] text-[22px] 2xl:text-[28px]">
                  {' '}
                  Niemand
                </span>
                , so we can bring a smile to many more people.
              </p>
              <p className=" font-fraunces lg:text-xl md:text-lg 2xl:text-2xl text-md leading-[2.25] text-center md:text-left">
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

//Just a comment to trigger a vercel deploy
