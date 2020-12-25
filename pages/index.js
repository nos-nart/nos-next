import Head from 'next/head'
import { Layout } from '../components/layout/layout';
import { Testimoni, Trusted, Hero, Service } from '../components';
import { testimonies, about } from '../data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Money tran$fer</title>
      </Head>
      <Layout>
        <Hero about={about}/>
        <Service />
        <Trusted />
        <Testimoni testimonies={testimonies}/>
      </Layout>
    </>
  )
}
