import React from 'react';
import Head from 'next/head';
import {Navbar, SearchBar, Card} from '@components/index';

const pdfs = [
	{
		slug: 'tejido-a-crochet',
		title: 'Tejido a crochet',
		description: 'Un tejido muy lindo',
		price: 3,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
];

const Tejidos = () => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-accent w-full">
			<Head>
				<title>Artes mafe | Tejidos</title>
				<meta name="description" content="Sitio oficial de Artes Mafe" />
				<link rel="icon" href="/artesmafe.ico" />
			</Head>

			<Navbar />
			<SearchBar />

			<section className="flex flex-wrap gap-16 w-full h-80 px-16">
				{pdfs.map((pdf) => (
					<Card key={pdf.title} pdf={pdf} />
				))}
			</section>
		</div>
	);
};

export default Tejidos;
