import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Get in contact with me!
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: lorenz.a.mueller@gmail.com</li>
			      	<li className="contact-item">Phone: +436509906497</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;