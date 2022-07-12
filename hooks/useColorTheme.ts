import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../interfaces/store.interface';
import { changeTheme } from '../store';

const useColorTheme = () => {
  const theme = useSelector((state: IStore) => state.darkLightTheme.theme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute(
        'data-theme',
        theme ? 'light' : 'dark',
      );
    }
  }, [theme]);

  const dispatch = useDispatch();

  return { theme, changeTheme: () => dispatch(changeTheme()) };
};

export default useColorTheme;
