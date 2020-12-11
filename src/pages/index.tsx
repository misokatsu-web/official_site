import Head from 'next/head'
import { FC } from 'react'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>みそかつWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to みそかつWeb
        </h1>
      </main>

      <footer className={styles.footer}>
          Powered by みそかつWeb
      </footer>
    </div>
  )
}

export default Home;