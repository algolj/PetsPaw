import Head from 'next/head';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';

import BreedInfo from '../../components/breedInfo';
import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import NotFoud from '../../components/notFound';
import ImageContainer from '../../components/imageContainer';

import style from './style.module.scss';

import { constants } from '../../constants';

import { IBreed } from '../../interfaces/breed.interface';

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
  const breed = await fetch(
    `${constants.API_URL}images/search?breed_id=${params.breed_id}`,
    {
      headers: {
        'x-api-key': constants.API_KEY,
      },
    },
  )
    .then((req) => req.json())
    .then((breedArr) => ({
      url: breedArr?.[0]?.url || '',
      breedInfo: breedArr[0]?.breeds?.[0] || {},
    }));
  return { props: { ...breed } };
}

const Breeds: NextPage<{ breedInfo: IBreed; url: string }> = ({
  breedInfo,
  url,
}) => {
  const locale = useLocale();

  return (
    <MainLayout>
      <Head>
        <title>Breed · PetsPaw</title>
      </Head>

      <PagePanel title={locale.breeds} isSubTitle={true} href="breeds">
        <p className={style['breed-title']}>
          {breedInfo?.id || locale.noFound}
        </p>
      </PagePanel>
      {breedInfo?.id ? (
        <>
          <ImageContainer image={url} alt={breedInfo.name}>
            <div className={style.carousel}>
              {Array(5)
                .fill('')
                .map((el, i) => (
                  <span className={style.carousel__item} key={i}></span>
                ))}
            </div>
          </ImageContainer>
          <BreedInfo {...breedInfo} />
        </>
      ) : (
        <NotFoud />
      )}
    </MainLayout>
  );
};

export default Breeds;
