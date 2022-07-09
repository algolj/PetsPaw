import Head from 'next/head';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';

const Breeds: NextPage = () => {
  const locale = useLocale();

  return (
    <MainLayout>
      <Head>
        <title>{locale.breeds} · PetsPaw</title>
      </Head>
      <PagePanel title={locale.breeds}></PagePanel>
      <p>breed_id</p>
    </MainLayout>
  );
};

export default Breeds;
