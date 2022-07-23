import { NextPage } from 'next';
import { useRouter } from 'next/router';

import useLocale from '../../hooks/useLocale';

import { useGetSearchBreedsQuery } from '../../store';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import BreedImageCard from '../../components/imageGallery/breedImageCard';

import style from './style.module.scss';

import { ISearchBreeds } from '../../interfaces/searchBreeds.interface';
import { IBreed } from '../../interfaces/breed.interface';

const SearchPage: NextPage = () => {
  const locale = useLocale();

  const router = useRouter();

  const { data: breeds, isLoading } = useGetSearchBreedsQuery(
    router.query as unknown as ISearchBreeds,
  );

  return (
    <MainLayout>
      <PagePanel title={locale.search} href="search" />
      <h2 className={style['search-title']}>
        {locale.searchResult}:{' '}
        <span className={style['search-key']}>{router.query.q}</span>
      </h2>
      <ImageGallery isLoading={isLoading}>
        {(breeds || []).map((breed: IBreed) => (
          <BreedImageCard
            key={breed.id}
            id={breed.id}
            name={breed.name}
            image_id={breed.reference_image_id}
          />
        ))}
      </ImageGallery>
    </MainLayout>
  );
};

export default SearchPage;
