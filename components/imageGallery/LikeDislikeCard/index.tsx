import { FC, useEffect, useState } from 'react';

import { useDeleteVoteMutation, useGetImageQuery } from '../../../store';

import Card from '../card';

interface ILikeDislikeCardProps {
  id: number;
  image_id: string;
  type: 'like' | 'dislike';
}

const LikeDislikeCard: FC<ILikeDislikeCardProps> = ({ id, image_id, type }) => {
  const { data: image } = useGetImageQuery(image_id);

  const [deleteVote] = useDeleteVoteMutation();

  const [imgUrl, setImageUrl] = useState('');

  const clickDeleteVote = () => {
    deleteVote(id);
  };

  useEffect(() => {
    setImageUrl(image?.url);
  }, [image]);

  return (
    <Card
      image={imgUrl || ''}
      isActive={false}
      type={type}
      change={clickDeleteVote}
    />
  );
};

export default LikeDislikeCard;
