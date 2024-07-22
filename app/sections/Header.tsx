import Image from 'next/image';
import Link from 'next/link';

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
            <Link href="http://localhost:3000/">
              <Image
                src={`${!scrolled && isHomePage ? '/header/logoWhite.svg' : '/header/logoBlack.svg'}`}
                alt="logo"
                width={40}
                height={45}
                className="md:group-hover:scale-105 mb-[2px]"
              />
            </Link>
            <Link href="http://localhost:3000/">
              <div
                className={`font-oleoSwash text-sm leading-3 ${logoOnHover()}`}
              >
                Pottery by
              </div>
            </Link>
            <Link href="http://localhost:3000/">
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
              href={'http://localhost:3000/login'}
              className="hidden md:inline"
            >
              <Image
                src={`${!scrolled && isHomePage ? '/header/userSymbolWhite.svg' : '/header/userSymbolBlack.svg'}`}
                alt="user symbol"
                width={20}
                height={23}
                className="md:hover:scale-110"
              />
            </Link>
            <Link
              href="http://localhost:3000/cart"
              className="hidden md:inline"
            >
              <Image
                src={`${!scrolled && isHomePage ? '/header/cartSymbolWhite.svg' : '/header/cartSymbolBlack.svg'}`}
                alt="cart symbol"
                width={23}
                height={23}
                className="md:hover:scale-110 mt-[2px]"
              />
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
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
