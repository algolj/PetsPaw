import { FC } from 'react';

import style from './style.module.scss';

import useLocale from '../../../hooks/useLocale';

interface IActivityLogProps {
  created_at: string;
  image_id: string;
  type: string;
}

const ActivityLog: FC<IActivityLogProps> = ({
  created_at: createdAt,
  image_id: imageId,
  type,
}) => {
  const locale = useLocale();

  const name = `log__icon_${type}`;

  const time = `${new Date(createdAt).getHours()}:${String(
    new Date(createdAt).getMinutes(),
  ).padStart(2, '0')}`;

  return (
    <li className={style.log}>
      <time className={style.log__time}>{time}</time>
      {locale.imageID}:{' '}
      <span className={style['log__image-id']}>{imageId}</span>
      {`  ${locale.addTo} ${locale[type as 'favorite' | 'like' | 'dislike']}`}
      <span className={`${style.log__icon} ${style[name]}`}></span>
    </li>
  );
};

export default ActivityLog;

// created_at: "2022-07-10T16:55:14.000Z"
// id: 100038670
// image: {id: '3kl', url: 'https://cdn2.thecatapi.com/images/3kl.jpg'}
// image_id: "3kl"
// sub_id: "r0eh43"
// user_id: "wc0wlo"
