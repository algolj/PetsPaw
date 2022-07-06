import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/svg/logo-full.svg';

import style from './style.module.scss';

import useLocale from '../../../hooks/useLocale';

import DarkMode from './dark-mode';
import Lang from './lang';

const LogoPanel: FC = () => {
  const locale = useLocale();

  return (
    <div className={style.panel}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            className={style.panel__logo}
            alt={locale.logoAlt}
          />
        </a>
      </Link>

      <span className={style.panel__item_right}></span>
      <DarkMode />
      <Lang />
    </div>
  );
};

export default LogoPanel;
