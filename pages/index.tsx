import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../components/home';

import Layout from '../components/layout';

const Main: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>PetsPaw</title>
        <meta name="description" content="PetsPaw" />
        <link rel="icon" href="/assets/svg/logo-paw.svg" />
      </Head>

      <Home />
    </Layout>
  );
};

export default Main;
