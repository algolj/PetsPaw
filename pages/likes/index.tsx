import Head from 'next/head';
import { NextPage } from 'next';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import ActivityLogs from '../../components/activityLogs';
import LikeDislikeCard from '../../components/imageGallery/LikeDislikeCard';

import useLocale from '../../hooks/useLocale';
import useGetLikesOrDislikes from '../../hooks/useGetLikesOrDislikes';

const LikesPage: NextPage = () => {
  const locale = useLocale();

  const { votes: likes, isLoading } = useGetLikesOrDislikes('likes');

  return (
    <MainLayout>
      <Head>
        <title>Likes · PetsPaw</title>
      </Head>
      <PagePanel title={locale.like} href="likes" />
      <ImageGallery isLoading={isLoading}>
        {(likes || []).map(({ id, image_id }) => (
          <LikeDislikeCard key={id} id={id} image_id={image_id} type="like" />
        ))}
      </ImageGallery>
      <ActivityLogs like={likes} />
    </MainLayout>
  );
};

export default LikesPage;
