import { FC, useState } from 'react';

import style from './style.module.scss';

const DarkMode: FC = () => {
  const [mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div className={style.mode}>
      <button
        onClick={changeMode}
        className={`${style['mode__icon-container']} ${
          mode && style['mode__icon-container_white']
        }`}
      ></button>
      <label className={style.mode__checkbox}>
        <input type="checkbox" checked={mode} onChange={changeMode} />
        <span className={style['mode__checkbox-switch']}></span>
      </label>
    </div>
  );
};

export default DarkMode;
