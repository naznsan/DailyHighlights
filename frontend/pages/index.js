import Head from 'next/head'
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.content}>
        <h2>A place to save your greatest memories, every day</h2>
      </div>
    </div>
  )
}
