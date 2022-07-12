import { FC } from 'react';

import useLocale from '../../hooks/useLocale';

import { IBreed } from '../../interfaces/breed.interface';

import style from './style.module.scss';

const BreedInfo: FC<IBreed> = ({
  name,
  temperament,
  origin,
  weight,
  life_span: lifeSpan,
}) => {
  const locale = useLocale();

  const info = [
    {
      title: locale.temperament,
      description: temperament,
      styleElem: { gridArea: 'temp', display: 'grid' },
    },
    {
      title: locale.origin,
      description: origin,
      styleElem: { gridArea: 'origin' },
    },
    {
      title: locale.weight,
      description: `${weight.metric} ${locale.kgs}`,
      styleElem: { gridArea: 'weight' },
    },
    {
      title: locale.lifeSpan,
      description: `${lifeSpan} ${locale.years}`,
      styleElem: { gridArea: 'life' },
    },
  ];

  return (
    <div className={style['breed-info']}>
      <div className={style['breed-info__title-container']}>
        <h2 className={style['breed-info__title']}>{name}</h2>
      </div>
      <p className={style['breed-info__slogan']}>{locale.breedSlogan}</p>
      {info.map(({ title, description, styleElem }) => (
        <div key={title} style={styleElem}>
          <h3 className={style['breed-info__feature-title']}>
            {title}
            :&nbsp;
          </h3>
          <span className={style['breed-info__feature']}>{description}</span>
        </div>
      ))}
    </div>
  );
};

export default BreedInfo;
