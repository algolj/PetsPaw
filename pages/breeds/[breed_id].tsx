import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';

import { useGetBreedQuery } from '../../store';

import Loader from '../../components/loader';
import BreedInfo from '../../components/breedInfo';
import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';

import style from './style.module.scss';

const Breeds: NextPage = () => {
  const locale = useLocale();

  const router = useRouter();

  const { data: breed, isLoading } = useGetBreedQuery(
    router.query as { breed_id: string },
  );

  return (
    <MainLayout>
      <Head>
        <title>{breed?.[0].breeds[0].name} · PetsPaw</title>
      </Head>

      <PagePanel title={locale.breeds} isSubTitle={true} href="breeds">
        <p className={style['breed-title']}>{breed?.[0].breeds[0].id}</p>
      </PagePanel>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={style['breed-image__container']}>
            <Image
              className={style['breed-image']}
              src={breed?.[0].url || '/'}
              layout="fill"
              alt={breed?.[0].breeds[0].name}
            />
            <div className={style.carousel}>
              {Array(5)
                .fill('')
                .map((el, i) => (
                  <span className={style.carousel__item} key={i}></span>
                ))}
            </div>
          </div>
          <BreedInfo {...breed?.[0].breeds[0]} />
        </>
      )}
    </MainLayout>
  );
};

export default Breeds;
