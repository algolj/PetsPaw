import { createSlice } from '@reduxjs/toolkit';
import { IDarkLightTheme } from '../../interfaces/darkLightTheme.interface';

const initialState: IDarkLightTheme = {
  theme:
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: light)').matches,
};

const darkLightThemeSlice = createSlice({
  name: 'darkLightTheme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = !state.theme;
    },
  },
});

export const { changeTheme } = darkLightThemeSlice.actions;

export default darkLightThemeSlice.reducer;
