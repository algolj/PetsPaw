import Head from 'next/head';
import { NextPage } from 'next';

import Layout from '../../components/layout';
import useLocale from '../../hooks/useLocale';
import MainLayout from '../../components/mainLayout';

const Breeds: NextPage = () => {
  const locale = useLocale();

  return (
    <Layout>
      <Head>
        <title>{locale.breeds} · PetsPaw</title>
      </Head>
      <MainLayout>hello</MainLayout>
    </Layout>
  );
};

export default Breeds;
