import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './style.module.scss';

interface IPagePanel {
  title: string;
  href?: string;
  children?: ReactNode;
  isSubTitle?: boolean;
}

const PagePanel: FC<IPagePanel> = ({ title, href, children, isSubTitle }) => {
  const router = useRouter();

  return (
    <div className={style['page-panel']}>
      <button
        className={style['back-button']}
        onClick={() => router.back()}
      ></button>
      <Link href={`/${href}` || ''}>
        <a
          className={`${style['page-title']} ${
            isSubTitle && style['page-title_secondary']
          }`}
        >
          {title}
        </a>
      </Link>
      {children}
    </div>
  );
};

export default PagePanel;
