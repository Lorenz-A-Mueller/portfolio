import Head from 'next/head';
import Image from 'next/image';
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
			      	I'm Lorenz.
			      </p>
		      </div>
					<div className="panda"><img src="./panda.jpeg" /></div>
	      </div>
			</section>
		</>
	);
}

export default About;