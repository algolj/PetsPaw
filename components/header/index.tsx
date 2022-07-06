import { FC } from 'react';

import useLocale from '../../hooks/useLocale';
import LogoPanel from './logo-panel';

import Nav from './nav';

import style from './style.module.scss';

const Header: FC = () => {
  const locale = useLocale();

  return (
    <div>
      <header className={style.header}>
        <LogoPanel />
        <div className={style.header__text}>
          <h1 className={style.header__title}>{locale.hiIntern}</h1>
          <p className={style.header__description}>{locale.welcome}</p>
        </div>
        <h2 className={style.header__topic}>{locale.useApi}</h2>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
