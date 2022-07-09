import Head from 'next/head';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';
import MainLayout from '../../components/mainLayout';

const Breeds: NextPage = () => {
  const locale = useLocale();

  return (
    <MainLayout>
      <Head>
        <title>{locale.breeds} · PetsPaw</title>
      </Head>
      <p>breed_id</p>
    </MainLayout>
  );
};

export default Breeds;
