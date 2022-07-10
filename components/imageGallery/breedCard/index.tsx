import { FC } from 'react';

import Link from 'next/link';

import style from './style.module.scss';

interface IBreedCardProps {
  id: string;
  name: string;
  image: string;
}

const BreedCard: FC<IBreedCardProps> = ({ id, name, image }) => (
  <Link href={`breeds/${id}`} placeholder={name}>
    <a
      className={style['breed-link']}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={style['breed-link__name']}>{name}</span>
    </a>
  </Link>
);

export default BreedCard;
