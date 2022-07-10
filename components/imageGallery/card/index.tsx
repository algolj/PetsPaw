import { FC } from 'react';

import style from './style.module.scss';

interface ICardProps {
  image: string;
  type: string;
  isActive: boolean;
  change: () => void;
}

const Card: FC<ICardProps> = ({ image, type, isActive, change }) => {
  const name = `card__icon_${type}${isActive ? '_active' : ''}`;
  return (
    <button
      className={style.card}
      style={{ backgroundImage: `url(${image})` }}
      onClick={change}
    >
      <span className={`${style.card__icon} ${style[name]}`}></span>
    </button>
  );
};

export default Card;
