import { FC, useEffect, useState } from 'react';

import {
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
  useGetFavouritesQuery,
} from '../../../store';

import Card from '../card';

interface IFavoriteCardProps {
  id: string;
  image: string;
  favorite_id?: number;
}

const FavoriteCard: FC<IFavoriteCardProps> = ({ id, image, favorite_id }) => {
  const { data: favorites, isLoading } = useGetFavouritesQuery('');

  const [isFavorite, setIsFavorite] = useState(false);

  const [addFavorite] = useAddFavouriteMutation();
  const [deleteFavorite] = useDeleteFavouriteMutation();

  const changeFavorite = () => {
    if (isFavorite) {
      deleteFavorite(
        favorite_id ||
          favorites.find(
            ({ image_id }: { image_id: string }) => image_id === id,
          ).id,
      );
    } else {
      addFavorite(id);
    }
  };

  useEffect(() => {
    setIsFavorite(
      (favorites || []).some(
        ({ image_id }: { image_id: string }) => image_id === id,
      ),
    );
  }, [favorites, id, isLoading]);

  return (
    <Card
      image={image}
      isActive={isFavorite}
      type={'favorite'}
      change={changeFavorite}
    />
  );
};

export default FavoriteCard;
