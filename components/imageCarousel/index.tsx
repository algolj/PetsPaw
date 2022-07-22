import { FC, useState } from 'react';

import ImageContainer from '../imageContainer';

import style from './style.module.scss';

interface IImageCarousel {
  images: string[];
  alt: string;
}

const ImageCarousel: FC<IImageCarousel> = ({ images, alt }) => {
  const [currentImage, setCurrentImage] = useState(images[0] || '');

  return (
    <ImageContainer image={currentImage} alt={alt}>
      <div className={style.carousel}>
        {images.map((img) => (
          <span
            className={`${style.carousel__item} ${
              img === currentImage && style.carousel__item_active
            }`}
            key={img}
            onClick={() => setCurrentImage(img)}
          ></span>
        ))}
      </div>
    </ImageContainer>
  );
};

export default ImageCarousel;
