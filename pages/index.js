import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing Vercel Services</title>
        <meta name="description" content="It's only a try" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Borgi.app!</a>
        </h1>

        <p className={styles.description}>
          Get started by following on my {' '}
          <code className={styles.code}><a href='https://twitter.com/francoborgiani_'>twitter</a></code>
        </p>
      </main>
    </div>
  )
}
