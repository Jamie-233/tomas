import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'antd';
import Login from 'components/login';
import { navbar_list } from './config';
import styles from './index.module.scss';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();

  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleCreatePost = () => {};

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  return (
    <div className={styles.navbar}>
      <section className={styles.logo_area}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </section>
      <section className={styles.link_area}>
        {navbar_list.map((nav) => (
          <Link key={nav.value} href={nav.value}>
            <a className={pathname === nav.value ? styles.active : ''}>
              {nav.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operation_area}>
        <Button onClick={handleCreatePost}>Create</Button>
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </section>

      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
