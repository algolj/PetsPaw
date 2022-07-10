import { FC, useEffect, useState } from 'react';
import {
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
  useGetFavouritesQuery,
} from '../../../store';

import style from './style.module.scss';

interface ILikeCardProps {
  id: string;
  image: string;
}

const LikeCard: FC<ILikeCardProps> = ({ id, image }) => {
  const { data: favorites, isLoading } = useGetFavouritesQuery('');

  const [isFavorite, setIsFavorite] = useState(false);

  const [addFavorite] = useAddFavouriteMutation();
  const [deleteFavorite] = useDeleteFavouriteMutation();

  const changeFavorite = () => {
    if (isFavorite) {
      deleteFavorite(
        favorites.find(({ image_id }: { image_id: string }) => image_id === id)
          .id,
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
    <button
      className={style['like-link']}
      style={{ backgroundImage: `url(${image})` }}
      onClick={changeFavorite}
    >
      <span
        className={`${style['like-link__like']} ${
          isFavorite && style['like-link__like_favorite']
        }`}
      ></span>
    </button>
  );
};

export default LikeCard;
