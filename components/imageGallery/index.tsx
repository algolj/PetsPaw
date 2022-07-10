import { FC, ReactNode } from 'react';

import Loader from '../loader';
import NotFoud from '../notFound';

import style from './style.module.scss';

const ImageGallery: FC<{ children?: ReactNode; isLoading?: boolean }> = ({
  children,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style['image-gallery']}>{children || <NotFoud />}</div>
      )}
    </>
  );
};

export default ImageGallery;
