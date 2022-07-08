import { FC } from 'react';
import { useRouter } from 'next/router';

import useLocale from '../../../hooks/useLocale';

import style from './style.module.scss';

const Nav: FC = () => {
  const locale = useLocale();

  const router = useRouter();

  const navItems = [
    {
      title: locale.voting,
      path: 'voting',
    },
    {
      title: locale.breeds,
      path: 'breeds',
    },
    {
      title: locale.gallery,
      path: 'gallery',
    },
  ];

  const goToLink = (path: string) => router.push(path);

  return (
    <nav className={style.nav}>
      {navItems.map(({ title, path }) => (
        <div
          className={style.nav__item}
          key={path}
          onClick={() => goToLink(path)}
        >
          <div
            className={`${style.nav__picture} ${
              style['nav__picture_' + path]
            } ${
              router.pathname.slice(1) === path && style.nav__picture_active
            }`}
          ></div>
          <div
            className={`${style.nav__button} ${
              router.pathname.slice(1) === path && style.nav__button_active
            }`}
          >
            {title}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
