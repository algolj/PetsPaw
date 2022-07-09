import { FC, ReactNode } from 'react';

import useLocale from '../../hooks/useLocale';

import Loader from '../loader';

import style from './style.module.scss';

const ImageGallery: FC<{ children?: ReactNode; isLoading?: boolean }> = ({
  children,
  isLoading,
}) => {
  const locale = useLocale();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style['image-gallery']}>
          {children || (
            <span className={style['image-gallery__empty']}>
              {locale.noFound}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
