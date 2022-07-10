import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '../header';

import style from './style.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={style.container}>
      <Head>
        <title>PetsPaw</title>
        <meta name="description" content="PetsPaw" />
        <link rel="icon" href="/assets/svg/logo-paw.svg" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
