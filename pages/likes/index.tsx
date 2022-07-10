import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import MainLayout from '../../components/mainLayout';
import PagePanel from '../../components/pagePanel';
import ImageGallery from '../../components/imageGallery';
import ActivityLogs from '../../components/activityLogs';
import LikeDislikeCard from '../../components/imageGallery/LikeDislikeCard';

import useLocale from '../../hooks/useLocale';

import { useGetVotesQuery } from '../../store';

const LikesPage: NextPage = () => {
  const locale = useLocale();

  const { data: allVotes, isLoading } = useGetVotesQuery('');

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setLikes((allVotes || []).filter(({ value }: { value: number }) => value));
  }, [allVotes]);

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
