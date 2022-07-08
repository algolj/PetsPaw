import { configureStore } from '@reduxjs/toolkit';

import { petsApi } from './api/pets.api';

import galleryFilterSlice from './slice/galleryFilter.slice';
import breedsFilterSlice from './slice/breedsFilter.slice';

export const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
    galleryFilter: galleryFilterSlice,
    breedsFilter: breedsFilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware),
});
