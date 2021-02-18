import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/LogIn.module.css';

const LogIn = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Log In</title>
      </Head>

      <Navbar />
      <div>
        <p>Username: </p>
        <input type='text'></input>
      </div>
      <div>
        <p>Password: </p>
        <input type='password'></input>
      </div>
      <button type='submit'>Log In</button>
    </div>
  );
}

export default LogIn;