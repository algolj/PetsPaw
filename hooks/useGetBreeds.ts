import { useSelector } from 'react-redux';

import { IBreed } from '../interfaces/breed.interface';
import { IStore } from '../interfaces/store.interface';

import { useGetBreedQuery, useGetBreedsQuery } from '../store';

const sort = {
  'a-b': (a: IBreed, b: IBreed) => a.name.localeCompare(b.name),
  'b-a': (a: IBreed, b: IBreed) => b.name.localeCompare(a.name),
};

const useGetBreeds = () => {
  const filters = useSelector((state: IStore) => state.breedsFilter);

  const { data: dataBreed, isLoading: isLoadingBreed } = useGetBreedQuery({
    breed_id: filters.breed,
  });
  const { data: dataBreeds, isLoading: isLoadingBreeds } = useGetBreedsQuery({
    limit: filters.limit,
    page: filters.page,
  });

  let breeds: IBreed[] = [];

  if (filters.breed) {
    breeds = [{ ...dataBreed?.[0]?.breeds[0] }];

    breeds[0].image = {
      url: dataBreed[0].url || '',
      id: '',
      width: 0,
      height: 0,
    };
  } else {
    breeds = dataBreeds;
  }

  if (filters.sort)
    breeds = [...breeds].sort(sort[filters.sort as 'a-b' | 'b-a']);

  return {
    breeds,
    isLoading: filters.breed ? isLoadingBreed : isLoadingBreeds,
  };
};

export default useGetBreeds;
