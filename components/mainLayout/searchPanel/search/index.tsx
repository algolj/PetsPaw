import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import useLocale from '../../../../hooks/useLocale';

import style from './style.module.scss';

interface ISearchProps {
  placeholder: string;
  searchLink: string;
  currentLink?: boolean;
  startSearchValue?: string;
}

const Search: FC<ISearchProps> = ({
  placeholder,
  searchLink,
  currentLink,
  startSearchValue,
}) => {
  const router = useRouter();
  const locale = useLocale();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setSearch(startSearchValue as string);
  }, [startSearchValue]);

  const goFound = () => {
    if (search) {
      router.push({
        pathname: searchLink,
        query: { q: search },
      });
    }
  };

  return (
    <div className={style['search-container']}>
      <input
        className={`${style['search-container__input']} ${
          currentLink && style['search-container__input_active']
        }`}
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? goFound() : '')}
      />
      <button
        className={style['search-container__button']}
        placeholder={locale.search}
        onClick={goFound}
      ></button>
    </div>
  );
};

export default Search;
