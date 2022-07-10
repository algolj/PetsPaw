import { ReactNode } from 'react';

import Layout from '../layout';
import SearchPanel from './searchPanel';

import style from './style.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: ILayoutProps) {
  return (
    <Layout>
      <div className={style['main-layout']}>
        <SearchPanel />
        <section className={style['main-container']}>
          <section className={style['main-wrapper']}>{children}</section>
        </section>
      </div>
    </Layout>
  );
}
