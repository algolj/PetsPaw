import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.scss';

import useLocale from '../../hooks/useLocale';
import useGetAllBreedsName from '../../hooks/useGetAllBreedsName';

import { IStore } from '../../interfaces/store.interface';

import PagePanel from '../pagePanel';

import { changeBreed, changeLimit, changeSort } from '../../store';

import { constants } from '../../constants';

const BreedsFilter: FC = () => {
  const filters = useSelector((state: IStore) => state.breedsFilter);
  const dispatch = useDispatch();

  const locale = useLocale();

  const breedsName = useGetAllBreedsName();

  const changeCurrentSort = (sort: string) => {
    dispatch(changeSort(sort));
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
        {constants.ITEMS_LIMIT.map((limit) => (
          <option key={limit} value={limit}>
            {locale.limit}: {limit}
          </option>
        ))}
      </select>
      {constants.BREED_FILTER.map(({ img, type }) => (
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
