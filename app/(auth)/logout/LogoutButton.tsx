'use client';

import { useRouter } from 'next/navigation';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    router.refresh();
  };

  return (
    <form className="flex items-center flex-col font-inknut w-[300px] mt-[100px] lg:mt-[120px] xl:mt-[140px] mb-14">
      <div className="sm:text-2xl text-xl text-center font-fraunces">
        You are already logged in.
      </div>
      <div className="flex justify-center mt-[26px]"></div>
      <button
        className="bg-secondary sm:w-[140px] w-[110px] sm:h-10 h-8 rounded-md text-white font-inknut font-semibold sm:text-[16px] text-sm uppercase"
        formAction={handleLogOut}
      >
        LOGOUT
      </button>
    </form>
  );
}
