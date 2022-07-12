import { FC } from 'react';
import useColorTheme from '../../../../hooks/useColorTheme';

import style from './style.module.scss';

const DarkMode: FC = () => {
  const { theme, changeTheme } = useColorTheme();

  return (
    <div className={style.mode}>
      <button
        onClick={changeTheme}
        className={`${style['mode__icon-container']} ${
          theme && style['mode__icon-container_white']
        }`}
      ></button>
      <label className={style.mode__checkbox}>
        <input type="checkbox" checked={theme} onChange={changeTheme} />
        <span className={style['mode__checkbox-switch']}></span>
      </label>
    </div>
  );
};

export default DarkMode;
