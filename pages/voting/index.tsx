import { NextPage } from 'next';

import PagePanel from '../../components/pagePanel';
import VoteBoard from '../../components/voteBoard';
import MainLayout from '../../components/mainLayout';
import ActivityLogs from '../../components/activityLogs';
import ImageContainer from '../../components/imageContainer';

import useGetLikesOrDislikes from '../../hooks/useGetLikesOrDislikes';
import useLocale from '../../hooks/useLocale';

import { useGetFavouritesQuery, useGetVoteForQuery } from '../../store';

const Voting: NextPage = () => {
  const locale = useLocale();

  const { data: voteImage, refetch: voteRefetch } = useGetVoteForQuery('');

  const { votes: likes } = useGetLikesOrDislikes('likes');

  const { votes: dislikes } = useGetLikesOrDislikes('dislikes');

  const { data: favorites } = useGetFavouritesQuery('');

  return (
    <MainLayout>
      <PagePanel title={locale.voting} href="voting" />
      <ImageContainer image={voteImage?.[0].url} alt={locale.cat}>
        <VoteBoard imageId={voteImage?.[0].id} changePicture={voteRefetch} />
      </ImageContainer>
      <div style={{ marginTop: 55 }}>
        <ActivityLogs like={likes} dislike={dislikes} favorite={favorites} />
      </div>
    </MainLayout>
  );
};

export default Voting;
