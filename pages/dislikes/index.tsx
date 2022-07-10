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

const DislikesPage: NextPage = () => {
  const locale = useLocale();

  const { data: allVotes, isLoading } = useGetVotesQuery('');

  const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    setDislikes(
      (allVotes || []).filter(({ value }: { value: number }) => !value),
    );
  }, [allVotes]);

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
