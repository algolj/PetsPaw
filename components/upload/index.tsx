import { Dispatch, FC, SetStateAction, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useLocale from '../../hooks/useLocale';

import getUserKey from '../../utils/getUserKey';

import style from './style.module.scss';

import { useUploadImageMutation } from '../../store';

interface IUploadProps {
  visible: boolean;
  changeVisible: Dispatch<SetStateAction<boolean>>;
}

const Upload: FC<IUploadProps> = ({ visible, changeVisible }) => {
  const locale = useLocale();

  const format = ['image/png', 'image/jpeg'];

  const [image, setImage] = useState<File | null>(null);

  const [drag, setDrag] = useState(true);

  const [
    uploadImg,
    {
      isLoading: loadingImage,
      isError: errorLoadImage,
      isSuccess: successLoad,
      reset,
    },
  ] = useUploadImageMutation();

  const loadImage = () => {
    if (!loadingImage && image) {
      const img = new FormData();
      img.append('file', image);
      img.append('sub_id', getUserKey());
      uploadImg(img);
    }
  };

  const setNewImage = (file: File | undefined) => {
    if (file && format.includes(file.type)) {
      setImage(file);
      setDrag(false);
      reset();
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
    <div
      className={`${style['upload-container']} ${
        visible && style['upload-container_visible']
      }`}
      onClick={() => changeVisible(false)}
    >
      <div className={style.upload} onClick={(e) => e.stopPropagation()}>
        <button
          className={style['upload__close-button']}
          onClick={() => changeVisible(false)}
        ></button>
        <h2 className={style.upload__title}>{locale.uploadTitle}</h2>
        <p className={style.upload__description}>
          {locale.uploadDesc1}
          <Link href={'https://thecatapi.com/privacy'}>
            <a className={style.upload__description_link} target="_blank">
              {locale.uploadDesc2}
            </a>
          </Link>
          {locale.uploadDesc3}
        </p>
        <input
          type="file"
          id="img-upload"
          className={style.dad__input}
          accept={format.join(', ')}
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
        <p className={style['logs-panel']}>
          {image ? `${locale.imageName}: ${image.name}` : locale.noFileSelected}
        </p>

        {errorLoadImage || successLoad ? (
          <p className={style['load-result']}>
            <span
              className={
                style[successLoad ? 'icon-link_success' : 'icon-link_error']
              }
            ></span>
            {locale[successLoad ? 'catLoad' : 'catNotFound']}
          </p>
        ) : (
          image && (
            <button className={style.upload__button} onClick={loadImage}>
              {loadingImage ? locale.loading : locale.uploadPhoto}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Upload;
