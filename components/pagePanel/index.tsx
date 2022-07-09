import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import style from './style.module.scss';

interface IPagePanel {
  title: string;
  children?: ReactNode;
}

const PagePanel: FC<IPagePanel> = ({ title, children }) => {
  const router = useRouter();

  return (
    <div className={style['page-panel']}>
      <button
        className={style['back-button']}
        onClick={() => router.back()}
      ></button>
      <h2 className={style['page-title']}>{title}</h2>
      {children}
    </div>
  );
};

export default PagePanel;
