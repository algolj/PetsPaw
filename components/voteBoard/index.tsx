import { FC } from 'react';

import { useAddFavouriteMutation, useAddVoteMutation } from '../../store';

import style from './style.module.scss';

interface IVoteBoardProps {
  imageId: string;
  changePicture: () => void;
}

const VoteBoard: FC<IVoteBoardProps> = ({ imageId, changePicture }) => {
  const [addVote] = useAddVoteMutation();
  const [addFavorite] = useAddFavouriteMutation();

  const addToFavorite = () => {
    addFavorite(imageId);
    changePicture();
  };
  const addToVote = (value: 1 | 0) => {
    addVote({ image_id: imageId, value });
    changePicture();
  };

  return (
    <div className={style['vote-board']}>
      <button
        className={`${style['vote-board__item']} ${style['vote-board__item_like']}`}
        onClick={() => addToVote(1)}
      ></button>
      <button
        className={`${style['vote-board__item']} ${style['vote-board__item_favorite']}`}
        onClick={addToFavorite}
      ></button>
      <button
        className={`${style['vote-board__item']} ${style['vote-board__item_dislike']}`}
        onClick={() => addToVote(0)}
      ></button>
    </div>
  );
};

export default VoteBoard;
