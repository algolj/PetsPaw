import { FC } from 'react';

import useLocale from '../../../hooks/useLocale';

import { useUploadImageMutation } from '../../../store';

import getUserKey from '../../../utils/getUserKey';

import style from './style.module.scss';

interface IUploadStatusPanel {
  image: File | null;
}

const UploadStatusPanel: FC<IUploadStatusPanel> = ({ image }) => {
  const locale = useLocale();

  const [
    uploadImg,
    {
      isLoading: loadingImage,
      isError: errorLoadImage,
      isSuccess: successLoad,
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

  return (
    <>
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
    </>
  );
};

export default UploadStatusPanel;
