import { createSlice } from '@reduxjs/toolkit';

import { IGalleryParams } from '../../interfaces/galleryParams.interface';

const initialState: IGalleryParams = {
  limit: 5,
  page: 0,
  mime_types: 'Static',
  order: 'RANDOM',
  bread_id: '',
};

const galleryFilterSlice = createSlice({
  name: 'galleryFilter',
  initialState,
  reducers: {
    changeOrder(state, action) {
      state.order = action.payload;
    },
    changeType(state, action) {
      state.mime_types = action.payload;
    },
    changeBreed(state, action) {
      state.bread_id = action.payload;
    },
    changeLimit(state, action) {
      state.limit = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changeOrder, changeType, changeBreed, changeLimit, changePage } =
  galleryFilterSlice.actions;

export default galleryFilterSlice.reducer;
