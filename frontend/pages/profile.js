import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {fetchPosts} from '../hooks/fetchPosts';
import styles from '../styles/Profile.module.css';

const Profile = () => {
    {
    // const [posts, setPosts] = useState(null);

    // useEffect(() => {
      // fetch('http://localhost:3001/posts')
        // .then(res => res.json())
        // .then(data => setPosts(data))
    // }, []);
  }
  const {posts, isLoading, isError} = fetchPosts();
  if (posts) console.log(posts);

  {
    // TODO: Currently the ^ fetch request is working
    // Connected to my own backend :)
    // However, look into using SWR hooks as it might save headaches from bugs in future
  }

  return (
    <div className={styles.root}>
      <Head>
        <title>naznsan's Profile</title>
      </Head>

      <div className={styles.content}>
        <h2>naznsan's Profile</h2>
      </div>
    </div>
  );
}

export default Profile;