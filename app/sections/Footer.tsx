import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bottom-0 bg-primary border-t-[3px] border-secondary z-10 ">
      <div className="flex w-[86%] justify-between mx-auto h-[176px]  font-inknut ">
        <div className=" flex flex-col items-center h-full justify-center group">
          <Link href="/">
            <Image
              src="/header/logoBlack.svg"
              alt="logo"
              width={54}
              height={60}
              className="group-hover:scale-105 mb-[2px]"
            />
          </Link>
          <div className="font-oleoSwash text-base leading-3 cursor-pointer group-hover:text-secondary ">
            Pottery by
          </div>
          <div className="font-oleoSwash leading-4 cursor-pointer group-hover:text-secondary">
            Niemand
          </div>
        </div>
        <div className="pt-8">
          <div className="text-xl underline mb-1 hover:text-secondary">
            <Link href="/products">Collection</Link>
          </div>
          <ul className="text-sm [&>*]:leading-6">
            <li className="hover:text-secondary cursor-pointer w-max hover:scale-105">
              <Link href="/products?producttype=cup">Cups</Link>
            </li>

            <li className="hover:text-secondary cursor-pointer w-max hover:scale-105">
              <Link href="/products?producttype=bowl">Bowls</Link>
            </li>
            <li className="hover:text-secondary cursor-pointer w-max hover:scale-105">
              <Link href="/products?producttype=novelty">Novelties</Link>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <div className="text-xl underline mb-1 ">Contact Us</div>
          <ul className="text-sm [&>*]:leading-6">
            <div className="group">
              <li className="ml-10 group-hover:text-secondary">
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
                <span className="group-hover:text-secondary">
                  <Link href="https://www.google.com/maps?q=1+Stephansplatz+Wien">
                    1010 Wien
                  </Link>
                </span>
              </li>
              <li className="ml-10 group-hover:text-secondary">
                <Link href="https://www.google.com/maps?q=1+Stephansplatz+Wien">
                  Austria
                </Link>
              </li>
            </div>
            <li className="flex item-center">
              <div className="w-10 flex justify-start ">
                <Image
                  src="/footer/emailIcon.svg"
                  width={22}
                  height={19}
                  alt="location icon"
                  className="ml-[1px]"
                />
              </div>
              <span className=" hover:text-secondary">
                <Link href="mailto:example@email.com">example@email.com</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <div className=" text-xl underline text-center mb-1">Social</div>
          <div className="flex gap-4 items-end mt-1">
            <Link href="https://www.facebook.com/">
              <Image
                src="/footer/facebookIcon.svg"
                width={22}
                height={19}
                alt="facebook icon"
                className=" hover:scale-110"
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src="/footer/instagramIcon.svg"
                width={20}
                height={20}
                alt="instagram icon"
                className=" hover:scale-110"
              />
            </Link>
            <Link href="https://x.com/">
              <Image
                src="/footer/twitterIcon.svg"
                width={20}
                height={17}
                alt="twitter icon"
                className=" hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <div className=" text-xl underline mb-1 pt-8 hover:text-secondary">
          <Link href="/about">About</Link>
        </div>
        <div className=" text-xl underline mb-1 pt-8 hover:text-secondary">
          <Link href="/faqs">FAQ's</Link>
        </div>
      </div>
    </footer>
  );
}
