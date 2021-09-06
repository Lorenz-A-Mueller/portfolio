import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hey, welcome to my portfolio!</h1>
            <p className="description">During the upcoming weeks, I'll update my portfolio here.</p>

            <Link href="/contact"><a className="cta">Contact me!</a></Link>
          </div>

          <div className="image-wrapper">
            <img src="./panda.jpeg" className="panda-image"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;