'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';

export default function ClientHeader() {
  const pathname = usePathname();

  const isHomepage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
  return <Header scrolled={scrolled} isHomePage={isHomepage} />;
}
