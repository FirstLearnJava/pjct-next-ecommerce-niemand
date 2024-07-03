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
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-screen-30px justify-center "
            style={{
              backgroundImage: "url('/heroSectionBackground.jpg')",
            }}
          >
            <section className="pt-[100px] px-[190px]">
              <h1 className="font-inknut text-7xl text-center mt-[8%] text-white">
                Welcome to <span className="font-oleoSwash">Niemand</span>
              </h1>
              <h2 className="text-white font-inknut text-3xl text-center mt-10">
                Your merchant for unique and contemporary pottery
              </h2>
            </section>
          </div>
        </div>
        <ShapeDividerHomepageHeader />
        <section className="flex flex-col my-[10%] w-[75%]  mx-[12.5%]">
          <h2 className=" text-center font-oleo text-[40px] mb-14">
            Shop the Collection
          </h2>
          <div className="flex ">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-[330px] h-[330px] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/cupsIconNew.png"
                      className="rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 pt-[90px] pl-1 text-white font-oleo text-[30px] z-10 uppercase">
                      Cups
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-[330px] h-[330px]  cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/test3.jpeg"
                      className=" rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 pt-[90px] text-white font-oleo text-[30px] z-10 uppercase">
                      Novelty
                    </p>
                  </Link>
                </div>
                <ShopNowButton />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <div className="relative w-[330px] h-[330px] cursor-pointer">
                  <Link href="/products">
                    <Image
                      alt=""
                      width={330}
                      height={330}
                      src="/homepage/bowlsIconNew.jpg"
                      className=" rounded-md"
                    />
                    <p className="absolute flex justify-center items-center inset-0 pt-[90px] text-white font-oleo text-[30px] z-10 uppercase">
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
          <div className="flex justify-center w-[75%] my-[10%]">
            <Image
              alt="person modelling clay"
              width={500}
              height={750}
              src="/homepage/modellingClay.jpg"
              className="rounded-sm"
            />
            <div className=" ml-[120px] mr-[180px]">
              <Link href="/about" className="">
                <h2 className=" font-oleo text-3xl mb-6 hover:text-secondary">
                  About <span className="font-oleoSwash">Niemand</span>
                </h2>
              </Link>
              <p className=" font-fraunces text-xl mb-7 leading-[2.25]">
                When we realized, how well our craftings were receive by family
                and friends, we got encouraged to create
                <span className="font-oleoSwash text-[26px]"> Niemand</span>, so
                we can bring a smile to many more people.
              </p>
              <p className=" font-fraunces text-xl leading-[2.25]">
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
