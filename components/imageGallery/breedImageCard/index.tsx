import { FC } from 'react';
import { useGetImageQuery } from '../../../store';

import BreedCard from '../breedCard';

interface IBreedImageCardProps {
  id: string;
  name: string;
  image_id: string;
}

const BreedImageCard: FC<IBreedImageCardProps> = ({ id, name, image_id }) => {
  const { data: imgLink } = useGetImageQuery(image_id);

  return (
    <BreedCard
      id={id}
      name={name}
      image={imgLink?.url || '/assets/svg/upload-bg.svg'}
    />
  );
};

export default BreedImageCard;
