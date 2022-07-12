import Head from 'next/head';
import { NextPage } from 'next';

import MainLayout from '../../components/mainLayout';
import BreedsFilter from '../../components/breedsFilter';
import ImageGallery from '../../components/imageGallery';

import { IBreed } from '../../interfaces/breed.interface';

import useGetBreeds from '../../hooks/useGetBreeds';
import BreedCard from '../../components/imageGallery/breedCard';

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
          <BreedCard
            key={breed.id}
            id={breed.id}
            name={breed.name}
            image={breed.image.url}
          />
        ))}
      </ImageGallery>
    </MainLayout>
  );
};

export default Breeds;
