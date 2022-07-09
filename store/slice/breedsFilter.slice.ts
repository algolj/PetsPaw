import { createSlice } from '@reduxjs/toolkit';
import { IBreedsFilter } from '../../interfaces/breedsFilter.interface';

const initialState: IBreedsFilter = {
  limit: 5,
  page: 0,
  breed: '',
  sort: '',
};

const breedsFilterSlice = createSlice({
  name: 'breedsFilter',
  initialState,
  reducers: {
    changeLimit(state, action) {
      state.limit = action.payload;
    },
    changeBreed(state, action) {
      state.breed = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changeLimit, changeBreed, changeSort, changePage } =
  breedsFilterSlice.actions;

export default breedsFilterSlice.reducer;
