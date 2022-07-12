import { FC, ReactNode } from 'react';
import Image from 'next/image';

import style from './style.module.scss';

interface IImageContainerProps {
  children: ReactNode;
  image: string;
  alt: string;
}

const ImageContainer: FC<IImageContainerProps> = ({ children, image, alt }) => {
  return (
    <div className={style.image__container}>
      <Image
        className={style.image}
        src={image || '/assets/svg/upload-bg.svg'}
        layout="fill"
        alt={alt}
      />
      {children}
    </div>
  );
};

export default ImageContainer;
