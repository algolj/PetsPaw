import { ReactNode } from 'react';

import SearchPanel from './searchPanel';

import style from './style.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: ILayoutProps) {
  return (
    <div className={style['main-layout']}>
      <SearchPanel />
      <section className={style.f}>{children}</section>
    </div>
  );
}
