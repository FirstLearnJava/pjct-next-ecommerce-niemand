import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  scrolled: boolean;
  isHomePage: boolean;
};

export default function Header({ scrolled, isHomePage }: HeaderProps) {
  function logoOnHover() {
    if (scrolled && isHomePage) {
      return 'group-hover:text-secondary';
    } else if (!isHomePage) {
      return 'group-hover:text-secondary';
    }
  }

  return (
    <header
      className={`w-full  fixed z-10 ${!scrolled && isHomePage ? 'bg-transparent border-b-0 text-white' : 'bg-primary border-secondary border-b-[3px]'}`}
    >
      <nav className="flex justify-between items-center w-[86%] mx-auto h-[100px]">
        <div className=" flex flex-col items-center justify-center mt-1 group">
          <Link href="/">
            <Image
              src={`${!scrolled && isHomePage ? '/header/logoWhite.svg' : '/header/logoBlack.svg'}`}
              alt="logo"
              width={40}
              height={45}
              className="group-hover:scale-105 mb-[2px]"
            />
          </Link>
          <Link href="/">
            <div
              className={`font-oleoSwash text-sm leading-3 ${logoOnHover()}`}
            >
              Pottery by
            </div>
          </Link>
          <Link href="/">
            <div
              className={`font-oleoSwash text-sm leading-4 ${logoOnHover()}`}
            >
              Niemand
            </div>
          </Link>
        </div>
        <div className="flex gap-20">
          <Link className="font-oleo text-[22px] hover:scale-105" href="/">
            Home
          </Link>
          <Link className="font-oleo text-[22px] hover:scale-105" href="/about">
            About Us
          </Link>
          <Link
            className="font-oleo text-[22px] hover:scale-105"
            href="/products"
          >
            Catalogue
          </Link>
          {/* {user ? (
          <LogoutButton />
        ) : (
          <>
            <Link href="/login">login</Link>
          </>
        )} */}
        </div>
        <div className="flex gap-10 ">
          <Link href="/login">
            <Image
              src={`${!scrolled && isHomePage ? '/header/userSymbolWhite.svg' : '/header/userSymbolBlack.svg'}`}
              alt="user symbol"
              width={20}
              height={23}
              className="hover:scale-110"
            />
          </Link>
          <Link href="/cart">
            <Image
              src={`${!scrolled && isHomePage ? '/header/cartSymbolWhite.svg' : '/header/cartSymbolBlack.svg'}`}
              alt="cart symbol"
              width={23}
              height={23}
              className="hover:scale-110 mt-[1px]"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
