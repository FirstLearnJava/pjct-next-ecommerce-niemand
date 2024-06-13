import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full  bottom-0 left-0 bg-primary border-t-[3px] border-secondary static  ">
      <div className="flex w-[86%] justify-between mx-auto h-[176px]  font-inknut ">
        <div className=" flex flex-col items-center h-full justify-center">
          <Link href="/">
            <Image src="/header/logo.svg" alt="logo" width={54} height={60} />
          </Link>
          <div className="font-oleoSwash text-base leading-3">Pottery by</div>
          <div className="font-oleoSwash leading-4">Niemand</div>
        </div>
        <div className="pt-8">
          <div className="text-xl underline mb-1">Collection</div>
          <ul className="text-sm [&>*]:leading-6">
            <li>Cups</li>
            <li>Bowls</li>
            <li>Novelties</li>
          </ul>
        </div>
        <div className="pt-8">
          <div className="text-xl underline mb-1 ">Contact Us</div>
          <ul className="text-sm [&>*]:leading-6">
            <li className="ml-10">Stephansplatz 1</li>
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
              <span>1010 Wien</span>
            </li>
            <li className="ml-10">Austria</li>
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
              <span>example@email.com</span>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <div className=" text-xl underline text-center mb-1">Social</div>
          <div className="flex gap-4 items-end mt-1">
            <Link href="/">
              <Image
                src="/footer/facebookIcon.svg"
                width={22}
                height={19}
                alt="facebook icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/footer/instagramIcon.svg"
                width={20}
                height={20}
                alt="instagram icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/footer/twitterIcon.svg"
                width={20}
                height={17}
                alt="twitter icon"
              />
            </Link>
          </div>
        </div>
        <div className=" text-xl underline mb-1 pt-8">About</div>
        <div className=" text-xl underline mb-1 pt-8">FAQ's</div>
      </div>
    </footer>
  );
}
