import Link from 'next/link';
import { FC } from 'react';

import style from './style.module.scss';

interface IIconLink {
  name: string;
  img: string;
  path: string;
  currentLink: boolean;
}

const IconLink: FC<IIconLink> = ({ name, img, path, currentLink }) => {
  return (
    <Link href={path} placeholder={name}>
      <a
        className={`${style['icon-link']} ${
          currentLink && style['icon-link_active']
        }`}
      >
        <span
          className={`${style['icon-link__icon']} ${
            currentLink && style['icon-link__icon_active']
          }`}
          style={{ WebkitMaskImage: `url(${img})`, maskImage: `url(${img})` }}
        ></span>
      </a>
    </Link>
  );
};

export default IconLink;
