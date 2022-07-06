import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';

import locale, { TLocale } from '../../../../locales';

import style from './style.module.scss';

const Lang: FC = () => {
  const router = useRouter();

  const changeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push('', '', { locale: e.target.value });
  };

  return (
    <select className={style.lang} value={router.locale} onChange={changeLang}>
      {Object.keys(locale).map((key) => (
        <option className={style.lang__item} key={key} value={key}>
          {locale[key as TLocale].lang}
        </option>
      ))}
    </select>
  );
};

export default Lang;
