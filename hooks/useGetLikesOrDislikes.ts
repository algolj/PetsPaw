import { useEffect, useState } from 'react';
import { useGetVotesQuery } from '../store';

const useGetLikesOrDislikes = (type: 'likes' | 'dislikes') => {
  const { data: allVotes, isLoading } = useGetVotesQuery('');

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(
      (allVotes || []).filter(({ value }: { value: number }) =>
        type === 'likes' ? value : !value,
      ),
    );
  }, [allVotes, type]);

  return {
    votes,
    isLoading,
  };
};

export default useGetLikesOrDislikes;
