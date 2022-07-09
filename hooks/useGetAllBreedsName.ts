import { IBreed } from '../interfaces/breed.interface';

import { useGetAllBreedsQuery } from '../store';

const useGetAllBreedsName = () => {
  const { data } = useGetAllBreedsQuery('');
  return [
    { name: 'All breeds', value: '' },
    ...((data as IBreed[]) || []).map(({ name }) => ({ name, value: name })),
  ];
};

export default useGetAllBreedsName;
