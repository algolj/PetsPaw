import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image from 'next/image';

import useLocale from '../../../hooks/useLocale';

import style from './style.module.scss';

import { constants } from '../../../constants';

interface IUploadZone {
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
}

const UploadZone: FC<IUploadZone> = ({ image, setImage }) => {
  const locale = useLocale();

  const [drag, setDrag] = useState(true);

  const setNewImage = (file: File | undefined) => {
    if (file && constants.IMG_FORMAT.includes(file.type)) {
      setImage(file);
      setDrag(false);
    }
  };

  const dragActive = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
  };

  const dragDrop = (e: React.DragEvent) => {
    dragActive(e);
    setNewImage(e.dataTransfer.files[0]);
  };

  return (
    <>
      <input
        type="file"
        id="img-upload"
        className={style.dad__input}
        accept={constants.IMG_FORMAT.join(', ')}
        onChange={(e) => setNewImage(e.target.files?.[0])}
      />
      <label
        htmlFor="img-upload"
        className={`${style.dad} ${drag || style.dad__drop}`}
        onDragStart={dragActive}
        onDragOver={dragOver}
        onDragLeave={dragActive}
        onDrop={dragDrop}
      >
        {image ? (
          <div className={style.dad__preview}>
            <Image
              src={URL.createObjectURL(image)}
              layout="fill"
              alt={locale.cat}
            />
          </div>
        ) : (
          <span
            className={style.dad__description}
            onDragStart={dragActive}
            onDragOver={dragOver}
            onDragLeave={dragActive}
          >
            {drag ? (
              <>
                <span
                  className={style.dad__description_strong}
                  onDragStart={dragActive}
                  onDragOver={dragOver}
                  onDragLeave={dragActive}
                >
                  {locale.fileDaD1}
                </span>
                &nbsp;
                {locale.fileDaD2}
                <span
                  className={style.dad__description_strong}
                  onDragStart={dragActive}
                  onDragOver={dragOver}
                  onDragLeave={dragActive}
                >
                  {locale.fileDaD3}
                </span>
                &nbsp;
                {locale.fileDaD4}
              </>
            ) : (
              `🏗 ${locale.drop}`
            )}
          </span>
        )}
      </label>
    </>
  );
};

export default UploadZone;
