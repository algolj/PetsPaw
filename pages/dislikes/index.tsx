import Head from 'next/head';
import { NextPage } from 'next';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import ActivityLogs from '../../components/activityLogs';
import LikeDislikeCard from '../../components/imageGallery/likeDislikeCard';

import useLocale from '../../hooks/useLocale';
import useGetLikesOrDislikes from '../../hooks/useGetLikesOrDislikes';

const DislikesPage: NextPage = () => {
  const locale = useLocale();

  const { votes: dislikes, isLoading } = useGetLikesOrDislikes('dislikes');

  return (
    <MainLayout>
      <Head>
        <title>Dislikes · PetsPaw</title>
      </Head>
      <PagePanel title={locale.dislike} href="dislikes" />
      <ImageGallery isLoading={isLoading}>
        {(dislikes || []).map(({ id, image_id }) => (
          <LikeDislikeCard
            key={id}
            id={id}
            image_id={image_id}
            type="dislike"
          />
        ))}
      </ImageGallery>
      <ActivityLogs dislike={dislikes} />
    </MainLayout>
  );
};

export default DislikesPage;
