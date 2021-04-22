import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Project ~ Home</title>
        <meta name="keywords" content="world"/>
      </Head>
      
      <div>
        
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}> hello and welcome to the home page</p>
        
        <Link href="/world">
          <a className={styles.btn}>See the world</a></Link>
      
      </div>
  </>
  )
}
