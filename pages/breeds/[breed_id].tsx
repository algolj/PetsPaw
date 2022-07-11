import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';

import { useGetBreedQuery } from '../../store';

import Loader from '../../components/loader';
import BreedInfo from '../../components/breedInfo';
import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import NotFoud from '../../components/notFound';

import style from './style.module.scss';
import ImageContainer from '../../components/imageContainer';

const Breeds: NextPage = () => {
  const locale = useLocale();

  const router = useRouter();

  const { data: breed, isLoading } = useGetBreedQuery(
    router.query as { breed_id: string },
  );

  return (
    <MainLayout>
      <Head>
        <title>breed · PetsPaw</title>
      </Head>

      <PagePanel title={locale.breeds} isSubTitle={true} href="breeds">
        <p className={style['breed-title']}>
          {breed?.[0]?.breeds[0]?.id || (!isLoading ? locale.noFound : '')}
        </p>
      </PagePanel>
      {isLoading ? (
        <Loader />
      ) : breed?.[0]?.breeds[0] ? (
        <>
          <ImageContainer
            image={breed?.[0].url}
            alt={breed?.[0].breeds[0].name}
          >
            <div className={style.carousel}>
              {Array(5)
                .fill('')
                .map((el, i) => (
                  <span className={style.carousel__item} key={i}></span>
                ))}
            </div>
          </ImageContainer>
          <BreedInfo {...breed?.[0].breeds[0]} />
        </>
      ) : (
        <NotFoud />
      )}
    </MainLayout>
  );
};

export default Breeds;
