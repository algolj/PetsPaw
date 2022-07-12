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
