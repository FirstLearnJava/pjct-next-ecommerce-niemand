'use client';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { ProductQuantity } from '../products/[productId]/actions';
import { useEffect, useState } from 'react';

type HeaderProps = {
  scrolled: boolean;
  isHomePage: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  handleNavigation: any;
};

export default function Header({
  scrolled,
  isHomePage,
  menuOpen,
  setMenuOpen,
  handleNavigation,
}: HeaderProps) {
  const [basketTotal, setBasketTotal] = useState(0);
  const cookies = Cookies.get('productQuantities') || '[{"quantity":0}]';

  useEffect(() => {
    const jsonfiedCookies = JSON.parse(cookies);

    const total = jsonfiedCookies.reduce(
      (previous: number, product: ProductQuantity) => {
        return previous + product.quantity;
      },
      0,
    );

    setBasketTotal(total);
  }, [cookies]);

  function logoOnHover() {
    if (scrolled && isHomePage) {
      return 'md:group-hover:text-secondary';
    } else if (!isHomePage) {
      return 'md:group-hover:text-secondary';
    }
  }

  if (menuOpen === false) {
    return (
      <header
        className={`w-full md:fixed absolute z-20 ${!scrolled && isHomePage ? 'bg-transparent border-b-0 text-white' : 'bg-primary border-secondary border-b-[3px]'}`}
      >
        <nav className="flex justify-between items-center md:w-[86%] w-[90%] mx-auto h-[110px] md:h-[100px]">
          <div className=" flex flex-col items-center justify-center mt-1 group ml-[4%] md:ml-0">
            <Link href="/">
              <Image
                src={`${!scrolled && isHomePage ? '/header/logoWhite.svg' : '/header/logoBlack.svg'}`}
                alt="logo"
                width={40}
                height={45}
                className="md:group-hover:scale-105 mb-[2px]"
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
          <div className="hidden md:flex gap-20">
            <Link className="font-oleo text-[22px] md:hover:scale-105" href="/">
              Home
            </Link>
            <Link
              className="font-oleo text-[22px] md:hover:scale-105"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="font-oleo text-[22px] md:hover:scale-105"
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
          <div className="flex md:gap-10 gap-7 ">
            <Link
              href={'/login'}
              className="hidden md:inline relative top-[4px]"
            >
              <Image
                src={`${!scrolled && isHomePage ? '/header/userSymbolWhite.svg' : '/header/userSymbolBlack.svg'}`}
                alt="user symbol"
                width={23}
                height={26}
                className="md:hover:scale-110"
              />
            </Link>
            <Link
              href="/cart"
              className="hidden md:inline relative group/basket"
            >
              <Image
                src={`${!scrolled && isHomePage ? '/header/cartSymbolWhite.svg' : '/header/cartSymbolBlack.svg'}`}
                alt="cart symbol"
                width={31}
                height={31}
                className="md:group-hover/basket:scale-110 mt-[2px]"
              />
              {basketTotal >= 1 && basketTotal <= 9 && (
                <span
                  className={`${!scrolled && isHomePage ? 'text-white' : 'text-secondary'} absolute top-[10px] left-[11px] font-mono  font-extrabold md:group-hover/basket:scale-110`}
                >
                  {basketTotal}
                </span>
              )}
              {basketTotal >= 10 && basketTotal <= 99 && (
                <span
                  className={`${!scrolled && isHomePage ? 'text-white' : 'text-secondary'} absolute top-[10px] left-[7px] font-mono  font-extrabold text-[15px] md:group-hover/basket:scale-110`}
                >
                  {basketTotal}
                </span>
              )}
              {basketTotal > 99 && (
                <span
                  className={`${!scrolled && isHomePage ? 'text-white' : 'text-secondary'} absolute top-[10px] left-[3px] font-mono  font-extrabold text-[15px] md:group-hover/basket:scale-110`}
                >
                  99+
                </span>
              )}
            </Link>
            <div className="md:hidden flex items-center mr-5 md:mr-0 mt-2 md:mt-0">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.6875 7.5H25.3125M4.6875 15H25.3125M4.6875 22.5H25.3125"
                    stroke={`${!scrolled && isHomePage ? 'white' : 'black'}`}
                    strokeWidth="1.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  if (menuOpen === true) {
    return (
      <div className=" bg-tertiary w-full h-full flex flex-col gap-6 font-fraunces text-[22px]">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="text-right mt-6 mr-6"
        >
          X
        </button>
        <ul className=" *:border-b-[2px] *:border-secondary flex flex-col justify-center *:h-[70px]">
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/login')}>Login</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/about')}>About Us</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/products')}>
              Catalogue
            </button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/cart')}>Cart</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/faqs')}>FAQ</button>
          </li>
        </ul>
      </div>
    );
  }
}
