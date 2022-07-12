import { NextPage } from 'next';

import Layout from '../../components/layout';

import useLocale from '../../hooks/useLocale';

import style from './style.module.scss';

const Custom404: NextPage = () => {
  const locale = useLocale();

  return (
    <Layout>
      <section className={style['not-found']}>
        <h2 className={style['not-found__emoji']}>😿</h2>
        <h3 className={style['not-found__title']}>{locale.notFround}</h3>
      </section>
    </Layout>
  );
};

export default Custom404;
