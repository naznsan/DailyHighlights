import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link href='/'>
        <a><h1>Daily Highlights</h1></a>
      </Link>
      <Link href='/LogIn'>
        <a><p>Log In</p></a>
      </Link>
    </header>
  );
}

export default Navbar;