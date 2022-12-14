import type { NextPage } from 'next';import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen pb-32 bg-white">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-asd"></div>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
