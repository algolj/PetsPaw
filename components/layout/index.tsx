import { ReactNode } from 'react';
import Header from '../header';

import style from './style.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
