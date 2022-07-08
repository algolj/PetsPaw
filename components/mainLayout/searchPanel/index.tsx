import { useRouter } from 'next/router';
import { FC } from 'react';
import useLocale from '../../../hooks/useLocale';

import IconLink from './iconLink';
import Search from './search';

import style from './style.module.scss';

const SearchPanel: FC = () => {
  const locale = useLocale();

  const router = useRouter();

  const currentLink = router.pathname.slice(1);

  const iconLinks = [
    {
      name: locale.like,
      img: '/assets/svg/like.svg',
      path: 'like',
    },
    {
      name: locale.favorite,
      img: '/assets/svg/fav.svg',
      path: 'favorite',
    },
    {
      name: locale.dislike,
      img: '/assets/svg/dislike.svg',
      path: 'dislike',
    },
  ];

  return (
    <aside className={style['search-panel']}>
      <div className={style['search-panel_flex']}>
        <Search
          placeholder={locale.searchPlaceholder}
          searchLink="search"
          currentLink={currentLink === 'search'}
        />
      </div>
      {iconLinks.map((params) => (
        <IconLink
          key={params.path}
          {...params}
          currentLink={currentLink === params.path}
        />
      ))}
    </aside>
  );
};

export default SearchPanel;
