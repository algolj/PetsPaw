import { configureStore } from '@reduxjs/toolkit';

import { petsApi } from './api/pets.api';

import galleryFilterSlice from './slice/galleryFilter.slice';
import breedsFilterSlice from './slice/breedsFilter.slice';
import darkLightThemeSlice from './slice/darkLightTheme.slice';

export const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
    galleryFilter: galleryFilterSlice,
    breedsFilter: breedsFilterSlice,
    darkLightTheme: darkLightThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware),
});
