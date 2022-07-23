import { Dispatch, FC, SetStateAction, useState } from 'react';
import Link from 'next/link';

import useLocale from '../../hooks/useLocale';

import UploadStatusPanel from './uploadStatusPanel';
import UploadZone from './uploadZone';

import style from './style.module.scss';

interface IUploadProps {
  visible: boolean;
  changeVisible: Dispatch<SetStateAction<boolean>>;
}

const Upload: FC<IUploadProps> = ({ visible, changeVisible }) => {
  const locale = useLocale();

  const [image, setImage] = useState<File | null>(null);

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
        <UploadZone image={image} setImage={setImage} />

        <p className={style['logs-panel']}>
          {image ? `${locale.imageName}: ${image.name}` : locale.noFileSelected}
        </p>

        <UploadStatusPanel image={image} />
      </div>
    </div>
  );
};

export default Upload;
