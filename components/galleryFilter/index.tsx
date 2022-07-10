import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { constants } from '../../constants';

import useGetAllBreedsName from '../../hooks/useGetAllBreedsName';
import useLocale from '../../hooks/useLocale';

import { IStore } from '../../interfaces/store.interface';

import {
  changeBreed,
  changeLimit,
  changeOrder,
  changePage,
  changeType,
} from '../../store/slice/galleryFilter.slice';

import style from './style.module.scss';

const GalleryFilter: FC = () => {
  const locale = useLocale();

  const galleryFilter = useSelector((state: IStore) => state.galleryFilter);
  const dispatch = useDispatch();

  const breedsName = useGetAllBreedsName();

  const getNewPage = () => {
    dispatch(changePage(galleryFilter.page + 1));
  };

  const order = [
    {
      name: locale.random,
      value: 'RANDOM',
    },
    {
      name: locale.desc,
      value: 'DESC',
    },
    {
      name: locale.asc,
      value: 'ASC',
    },
  ];

  const type = [
    {
      name: locale.all,
      value: 'All',
    },
    {
      name: locale.static,
      value: 'Static',
    },
    {
      name: locale.animated,
      value: 'Animated',
    },
  ];

  return (
    <div className={style['gallery-filter']}>
      <div className={style['gallery-filter_order']}>
        <h4 className={style['gallery-filter__title']}>{locale.order}</h4>
        <select
          className={style['gallery-filter__filter']}
          value={galleryFilter.order}
          onChange={(e) => dispatch(changeOrder(e.target.value))}
        >
          {order.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={style['gallery-filter_type']}>
        <h4 className={style['gallery-filter__title']}>{locale.type}</h4>
        <select
          className={style['gallery-filter__filter']}
          value={galleryFilter.mime_types}
          onChange={(e) => dispatch(changeType(e.target.value))}
        >
          {type.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={style['gallery-filter_breed']}>
        <h4 className={style['gallery-filter__title']}>{locale.breed}</h4>
        <select
          className={style['gallery-filter__filter']}
          value={galleryFilter.bread_id}
          onChange={(e) => dispatch(changeBreed(e.target.value))}
        >
          {breedsName.map(({ name, value }) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={style['gallery-filter_limit']}>
        <h4 className={style['gallery-filter__title']}>{locale.limit}</h4>
        <select
          className={style['gallery-filter__filter']}
          value={galleryFilter.limit}
          onChange={(e) => dispatch(changeLimit(e.target.value))}
        >
          {constants.ITEMS_LIMIT.map((el) => (
            <option key={el} value={el}>
              {el} {locale.itemsPage}
            </option>
          ))}
        </select>
      </div>
      <button
        className={style['gallery-filter_upload']}
        onClick={getNewPage}
      ></button>
    </div>
  );
};

export default GalleryFilter;
