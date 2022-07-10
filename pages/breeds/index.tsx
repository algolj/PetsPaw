import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

import MainLayout from '../../components/mainLayout';
import BreedsFilter from '../../components/breedsFilter';
import ImageGallery from '../../components/imageGallery';

import { IBreed } from '../../interfaces/breed.interface';

import style from './style.module.scss';
import useGetBreeds from '../../hooks/useGetBreeds';

const Breeds: NextPage = () => {
  const { breeds, isLoading } = useGetBreeds();

  return (
    <MainLayout>
      <Head>
        <title>breeds · PetsPaw</title>
      </Head>
      <BreedsFilter />
      <ImageGallery isLoading={isLoading}>
        {(breeds || []).map((breed: IBreed) => (
          <Link
            key={breed.id}
            href={`breeds/${breed.id}`}
            placeholder={breed.name}
          >
            <a
              className={style['breed-link']}
              style={{ backgroundImage: `url(${breed.image.url})` }}
            >
              <span className={style['breed-link__name']}>{breed.name}</span>
            </a>
          </Link>
        ))}
      </ImageGallery>
    </MainLayout>
  );
};

export default Breeds;
