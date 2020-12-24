import Head from 'next/head'
import { Layout } from '../components/layout/layout';
import { Testimoni, Trusted } from '../components';
import { testimonies } from '../data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Park & Go</title>
      </Head>
      <Layout>
        <Trusted />
        <Testimoni testimonies={testimonies}/>
      </Layout>
    </>
  )
}
