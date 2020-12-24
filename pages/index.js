import Head from 'next/head'
import { Layout } from '../components/layout/layout';
import { Testimoni } from '../components';
import { testimonies } from '../data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Park & Go</title>
      </Head>
      <Layout>
        <Testimoni testimonies={testimonies}/>
      </Layout>
    </>
  )
}
