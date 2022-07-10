import { useSelector } from 'react-redux';
import { NextPage } from 'next';

import useLocale from '../../hooks/useLocale';
import useGetGallery from '../../hooks/useGetGallery';

import GalleryFilter from '../../components/galleryFilter';
import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import FavoriteCard from '../../components/imageGallery/favoriteCard';

import style from './style.module.scss';

import { IStore } from '../../interfaces/store.interface';
import { IGalleryParams } from '../../interfaces/galleryParams.interface';

const GalleryPage: NextPage = () => {
  const locale = useLocale();

  const filters = useSelector((state: IStore) => state.galleryFilter);

  const { data: pets, isLoading } = useGetGallery(
    filters as unknown as IGalleryParams,
  );

  return (
    <MainLayout>
      <PagePanel title={locale.gallery} href="search">
        <button className={style['upload-button']}>
          <span className={style['upload-button__icon']}></span>
          <span>{locale.upload}</span>
        </button>
      </PagePanel>
      <GalleryFilter />
      <ImageGallery isLoading={isLoading}>
        {(pets || []).map(({ id, url }: { id: string; url: string }) => (
          <FavoriteCard key={id} id={id} image={url} />
        ))}
      </ImageGallery>
    </MainLayout>
  );
};

export default GalleryPage;
