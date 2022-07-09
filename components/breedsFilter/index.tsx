import { FC } from 'react';

import style from './style.module.scss';

import useLocale from '../../hooks/useLocale';
import PagePanel from '../pagePanel';
import useGetAllBreedsName from '../../hooks/useGetAllBreedsName';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store.interface';
import { changeBreed, changeLimit, changeSort } from '../../store';

const BreedsFilter: FC = () => {
  const filters = useSelector((state: IStore) => state.breedsFilter);
  const dispatch = useDispatch();

  const locale = useLocale();

  const breedsName = useGetAllBreedsName();

  const itemsLimit = [5, 10, 15, 20];

  const sortBy = [
    {
      img: '/assets/svg/sort-b-a.svg',
      type: 'b-a',
    },
    {
      img: '/assets/svg/sort-a-b.svg',
      type: 'a-b',
    },
  ];

  const changeCurrentSort = (sort: string) => {
    dispatch(changeSort(sort === filters.sort ? '' : sort));
  };

  return (
    <PagePanel title={locale.breeds} href="breeds">
      <select
        className={`${style['sort-select']} ${style['sort-select_full-line']}`}
        value={filters.breed}
        onChange={(e) => dispatch(changeBreed(e.target.value))}
      >
        {breedsName.map(({ name, value }) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))}
      </select>
      <select
        className={style['sort-select']}
        value={filters.limit}
        onChange={(e) => dispatch(changeLimit(e.target.value))}
      >
        {itemsLimit.map((limit) => (
          <option key={limit} value={limit}>
            {locale.limit}: {limit}
          </option>
        ))}
      </select>
      {sortBy.map(({ img, type }) => (
        <button
          key={img}
          className={`${style['sort-button']} ${
            filters.sort === type && style['sort-button_active']
          }`}
          onClick={() => changeCurrentSort(type)}
        >
          <span
            className={`${style['sort-button__icon']} ${
              filters.sort === type && style['sort-button__icon_active']
            }`}
            style={{
              WebkitMaskImage: `url(${img})`,
              maskImage: `url(${img})`,
            }}
          ></span>
        </button>
      ))}
    </PagePanel>
  );
};

export default BreedsFilter;
