'use client';
import styles from './LogoutButton.module.scss';

import { useRouter } from 'next/navigation';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogOut = async () => {
    await logout();
    router.refresh();
  };

  return (
    <form>
      <button className={styles.logoutButton} formAction={handleLogOut}>
        logout
      </button>
    </form>
  );
}
