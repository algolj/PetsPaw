import { configureStore } from '@reduxjs/toolkit';
import { petsApi } from './api/pets.api';

export const store = configureStore({
  reducer: { [petsApi.reducerPath]: petsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware),
});
