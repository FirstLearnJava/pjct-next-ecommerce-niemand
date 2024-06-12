import Link from 'next/link';
import React from 'react';

export default function SuccessPage() {
  return (
    <div>
      Congratulation! Your Purchase has been successfull!{' '}
      <Link href="/products">Keep shopping!</Link>
    </div>
  );
}
