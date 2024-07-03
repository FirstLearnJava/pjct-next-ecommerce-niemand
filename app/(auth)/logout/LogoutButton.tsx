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
    <form className="flex items-center flex-col font-inknut w-[300px] mt-[170px]">
      <div className="text-2xl text-center font-fraunces">
        You are already logged in.
      </div>
      <div className="flex justify-center mt-[26px]"></div>
      <button
        className="bg-secondary w-[140px] h-10 rounded-md text-white font-inknut font-semibold text-[16px] uppercase"
        formAction={handleLogOut}
      >
        LOGOUT
      </button>
    </form>
  );
}
