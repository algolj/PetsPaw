import { FC } from 'react';
import Image from 'next/image';

import homeImg from '../../public/assets/img/girl-and-pet.png';

import style from './style.module.scss';

const Home: FC = () => {
  return (
    <section className={style.home}>
      <Image src={homeImg} layout="fill" />
    </section>
  );
};

export default Home;
