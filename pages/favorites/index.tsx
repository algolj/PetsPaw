import Head from 'next/head';
import { NextPage } from 'next';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import FavoriteCard from '../../components/imageGallery/favoriteCard';
import ActivityLogs from '../../components/activityLogs';

import useLocale from '../../hooks/useLocale';

import { useGetFavouritesQuery } from '../../store';

import { IFavoriteItem } from '../../interfaces/favoriteItem.interface';

const FavoritePage: NextPage = () => {
  const locale = useLocale();

  const { data: favorites, isLoading } = useGetFavouritesQuery('');

  return (
    <MainLayout>
      <Head>
        <title>Favorites · PetsPaw</title>
      </Head>
      <PagePanel title={locale.favorite} href="like" />
      <ImageGallery isLoading={isLoading}>
        {(favorites || []).map(
          ({ id: favorite_id, image, image_id }: IFavoriteItem) => (
            <FavoriteCard
              key={favorite_id}
              favorite_id={favorite_id}
              id={image_id}
              image={image.url}
            />
          ),
        )}
      </ImageGallery>
      <ActivityLogs favorite={favorites} />
    </MainLayout>
  );
};

export default FavoritePage;
