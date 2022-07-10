import { FC } from 'react';

import { IFavorite } from '../../interfaces/favorite.interface';

import ActivityLog from './activityLog';

interface IActivityLogsProps {
  favorite?: IFavorite[];
  dislike?: IFavorite[];
  like?: IFavorite[];
}

const ActivityLogs: FC<IActivityLogsProps> = ({ favorite, like, dislike }) => {
  const addType = (arr: IFavorite[] | undefined, type: string) =>
    (arr || []).map((el: IFavorite) => ({ ...el, type }));

  const items = [
    ...addType(favorite, 'favorite'),
    ...addType(like, 'like'),
    ...addType(dislike, 'dislike'),
  ].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return (
    <ul>
      {items.map(({ image_id, created_at, type }) => (
        <ActivityLog
          key={created_at}
          created_at={created_at}
          image_id={image_id}
          type={type}
        />
      ))}
    </ul>
  );
};

export default ActivityLogs;
