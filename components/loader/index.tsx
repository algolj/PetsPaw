import { FC } from 'react';

import style from './style.module.scss';

const Loader: FC = () => (
  <div className={style.loader}>
    <span className={style['loader-spiner']}>🐱</span>
  </div>
);

export default Loader;
