import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

const LogIn = () => {
  return (
    <div>
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
    </div>
  );
}

export default LogIn;