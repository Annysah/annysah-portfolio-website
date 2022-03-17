import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Annysah Portfolio Website</title>
        <meta name="description" content="A portfolio website to showcase projects Annysah have worked on" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main /> 
    </>
  )
}
