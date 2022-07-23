import { FC } from 'react';

import useLocale from '../../hooks/useLocale';

import style from './style.module.scss';

const NotFoud: FC = () => {
  const locale = useLocale();

  return <span className={style['not-found']}>{locale.noFound}</span>;
};

export default NotFoud;
