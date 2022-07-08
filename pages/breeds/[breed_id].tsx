import Head from 'next/head';
import { NextPage } from 'next';

import Layout from '../../components/layout';
import useLocale from '../../hooks/useLocale';

const Breeds: NextPage = () => {
  const locale = useLocale();

  return (
    <Layout>
      <Head>
        <title>{locale.breeds} · PetsPaw</title>
      </Head>
      <p>breed_id</p>
    </Layout>
  );
};

export default Breeds;
