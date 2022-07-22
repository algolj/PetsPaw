import Head from 'next/head';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';

import BreedInfo from '../../components/breedInfo';
import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import NotFoud from '../../components/notFound';
import ImageCarousel from '../../components/imageCarousel';

import style from './style.module.scss';

import { constants } from '../../constants';

import { IBreed } from '../../interfaces/breed.interface';
import { IBreedSearch } from '../../interfaces/breedSearch.interface';

export async function getStaticPaths() {
  const path = await fetch(`${constants.API_URL}breeds`).then((req) =>
    req.json(),
  );
  return {
    paths: (path as IBreed[]).map(({ id }) => ({
      params: { breed_id: String(id) },
    })),
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { breed_id: string };
}) {
  const searchParams = new URLSearchParams({
    breed_id: params.breed_id,
    page: '0',
    limit: '5',
  });

  const breed = await fetch(
    `${constants.API_URL}images/search?${searchParams}`,
    {
      headers: {
        'x-api-key': constants.API_KEY,
      },
    },
  )
    .then((req) => req.json())
    .then((breedArr: IBreedSearch[]) => ({
      img_url: breedArr.map(({ url }) => url),
      breedInfo: breedArr[0].breeds[0],
    }));
  return { props: { ...breed } };
}

const Breeds: NextPage<{ breedInfo: IBreed; img_url: string[] }> = ({
  breedInfo,
  img_url,
}) => {
  const locale = useLocale();

  return (
    <MainLayout>
      <Head>
        <title>{breedInfo.name} · PetsPaw</title>
      </Head>

      <PagePanel title={locale.breeds} isSubTitle={true} href="breeds">
        <p className={style['breed-title']}>
          {breedInfo?.id || locale.noFound}
        </p>
      </PagePanel>
      {breedInfo?.id ? (
        <>
          <ImageCarousel images={img_url} alt={breedInfo.name} />
          <BreedInfo {...breedInfo} />
        </>
      ) : (
        <NotFoud />
      )}
    </MainLayout>
  );
};

export default Breeds;
