import { FC } from 'react';

import useLocale from '../../hooks/useLocale';

import Nav from './nav';
import LogoPanel from './logo-panel';

import style from './style.module.scss';

const Header: FC = () => {
  const locale = useLocale();

  return (
    <header className={style.header}>
      <LogoPanel />
      <div className={style.header__text}>
        <h1 className={style.header__title}>{locale.hiIntern}</h1>
        <p className={style.header__description}>{locale.welcome}</p>
      </div>
      <h2 className={style.header__topic}>{locale.useApi}</h2>
      <Nav />
    </header>
  );
};

export default Header;
