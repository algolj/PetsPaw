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
  reducers: {},
});

export default galleryFilterSlice.reducer;
