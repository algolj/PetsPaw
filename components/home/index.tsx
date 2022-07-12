import { FC } from 'react';
import Image from 'next/image';

import homeImg from '../../public/assets/img/girl-and-pet.png';

import style from './style.module.scss';
import useLocale from '../../hooks/useLocale';

const Home: FC = () => {
  const locale = useLocale();
  return (
    <section className={style.home}>
      <Image src={homeImg} layout="fill" alt={locale.hugCat} />
    </section>
  );
};

export default Home;
