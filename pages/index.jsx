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
            <h1 className="title">Lorenz Mueller</h1>
            <h1 className="title">| Web-Dev</h1>
            <h2 className="title">Welcome to my portfolio</h2>
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