import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  scrolled: boolean;
  isHomePage: boolean;
};

export default function Header({ scrolled, isHomePage }: HeaderProps) {
  return (
    <header
      className={`w-full  fixed ${scrolled && isHomePage ? 'bg-primary border-secondary border-b-[3px]' : 'bg-transparent border-b-0 text-white'}`}
    >
      <nav className="flex justify-between items-center w-[86%] mx-auto h-[96px]">
        <div className=" flex flex-col items-center justify-center mt-1">
          <Link href="/">
            <Image src="/header/logo.svg" alt="logo" width={40} height={45} />
          </Link>
          <Link href="/">
            <div className="font-oleoSwash text-sm leading-3">Pottery by</div>
          </Link>
          <Link href="/">
            <div className="font-oleoSwash text-sm leading-4">Niemand</div>
          </Link>
        </div>
        <div className="flex gap-20 ">
          <Link className=" font-oleo text-lg " href="/">
            Home
          </Link>
          <Link className=" font-oleo text-lg " href="/">
            About Us
          </Link>
          <Link className=" font-oleo text-lg " href="/">
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
        <div className="flex gap-7">
          <Link href="/login">
            <Image
              src="/header/userSymbol.svg"
              alt="user symbol"
              width={18}
              height={22}
            />
          </Link>
          <Link href="/cart">
            <Image
              src="/header/cartSymbol.svg"
              alt="cart symbol"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
