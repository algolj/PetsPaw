import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout';

import useLocale from '../hooks/useLocale';

const Home: NextPage = () => {
  const locale = useLocale();

  return (
    <Layout>
      <Head>
        <title>Next.JS kit start</title>
        <meta name="description" content="Next.JS kit start" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <>{locale.hello}</>
    </Layout>
  );
};

export default Home;
