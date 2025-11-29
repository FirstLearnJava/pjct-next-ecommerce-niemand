'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import Header from './Header';
import { useRouter } from 'next/navigation';
import { UrlObject } from 'url';

type ClientHeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function ClientHeader({
  menuOpen,
  setMenuOpen,
}: ClientHeaderProps) {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    router.push(path as any);
  };
  const pathname = usePathname();

  const isHomepage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    if (!isHomepage) return;

    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomepage]);

  return (
    <Header
      scrolled={scrolled}
      isHomePage={isHomepage}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      handleNavigation={handleNavigation}
    />
  );
}
