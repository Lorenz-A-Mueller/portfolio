import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Panda from '../public/panda.jpeg';

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	Hi!
			      </p>
						<p>Welcome to my portfolio page. I'm a fullstack web-developer-to-be, based in Vienna.</p>
		      </div>

	      </div>
			</section>
		</>
	);
}

export default About;