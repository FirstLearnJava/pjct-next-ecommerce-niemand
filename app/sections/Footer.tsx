import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bottom-0 bg-primary border-t-[3px] border-secondary z-10 text-[14px] md:text-[16px]">
      <div className="flex w-[86%] px-1 justify-between mx-auto md:h-[184px] font-inknut flex-col md:flex-row mb-6 md:mb-1">
        <div className="md:flex flex-col  items-center h-full mt-2 justify-center group hidden">
          <Link href="/">
            <Image
              src="/header/logoBlack.svg"
              alt="logo"
              width={54}
              height={60}
              className="md:group-hover:scale-105 mb-[2px]"
            />
          </Link>
          <div className="font-oleoSwash text-base leading-3 cursor-pointer md:group-hover:text-secondary ">
            Pottery by
          </div>
          <div className="font-oleoSwash leading-4 cursor-pointer md:group-hover:text-secondary">
            Niemand
          </div>
        </div>
        <div className="pt-8">
          <div className="lg:text-xl underline mb-1 md:hover:text-secondary uppercase md:normal-case underline-offset-[3px]">
            <Link href="/products">Collection</Link>
          </div>
          <ul className="text-sm [&>*]:leading-9 md:*:leading-6">
            <li className="md:hover:text-secondary cursor-pointer w-max md:hover:scale-105">
              <Link href="/products?producttype=cup">Cups</Link>
            </li>

            <li className="md:hover:text-secondary cursor-pointer w-max md:hover:scale-105">
              <Link href="/products?producttype=bowl">Bowls</Link>
            </li>
            <li className="md:hover:text-secondary cursor-pointer w-max md:hover:scale-105">
              <Link href="/products?producttype=novelty">Novelties</Link>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <div className="lg:text-xl underline mb-1 uppercase md:normal-case underline-offset-[3px]">
            Contact Us
          </div>
          <ul className="text-sm [&>*]:leading-6 *:text-[12px] md:*:text-[14px]">
            <div className="group mt-3 md:mt-2 ">
              <li className="ml-10 md:group-hover:text-secondary">
                <Link href="https://www.google.com/maps?q=1+Stephansplatz+Wien">
                  Stephansplatz 1
                </Link>
              </li>
              <li className="flex item-center">
                <div className="w-10 flex justify-start">
                  <Image
                    src="/footer/locationIcon.svg"
                    width={24}
                    height={24}
                    alt="location icon"
                    className=""
                  />
                </div>
                <span className="md:group-hover:text-secondary">
                  <Link href="https://www.google.com/maps?q=1+Stephansplatz+Wien">
                    1010 Wien
                  </Link>
                </span>
              </li>
              <li className="ml-10 md:group-hover:text-secondary">
                <Link href="https://www.google.com/maps?q=1+Stephansplatz+Wien">
                  Austria
                </Link>
              </li>
            </div>
            <li className="flex item-center mt-3 md:m-0">
              <div className="w-10 flex justify-start">
                <Image
                  src="/footer/emailIcon.svg"
                  width={22}
                  height={19}
                  alt="location icon"
                  className="ml-[1px]"
                />
              </div>
              <span className=" md:hover:text-secondary">
                <Link href="mailto:example@email.com">example@email.com</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <div className=" lg:text-xl underline md:text-center mb-1 uppercase md:normal-case underline-offset-[3px]">
            Social
          </div>
          <div className="flex md:gap-4 gap-7 items-end md:mt-2 mt-4">
            <Link href="https://www.facebook.com/">
              <Image
                src="/footer/facebookIcon.svg"
                width={22}
                height={19}
                alt="facebook icon"
                className=" md:hover:scale-110"
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src="/footer/instagramIcon.svg"
                width={20}
                height={20}
                alt="instagram icon"
                className=" md:hover:scale-110"
              />
            </Link>
            <Link href="https://x.com/">
              <Image
                src="/footer/twitterIcon.svg"
                width={20}
                height={17}
                alt="twitter icon"
                className=" md:hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <div className=" lg:text-xl underline mb-1 md:pt-8 pt-6 md:hover:text-secondary uppercase md:normal-case underline-offset-[3px]">
          <Link href="/about">About</Link>
        </div>
        <div className=" lg:text-xl underline mb-1 md:pt-8 pt-6 md:hover:text-secondary uppercase md:normal-case underline-offset-[3px]">
          <Link href="/faqs">FAQs</Link>
        </div>
      </div>
    </footer>
  );
}
