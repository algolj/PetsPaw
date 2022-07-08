import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 5,
  page: 0,
  breed: '',
  sort: true,
};

const breedsFilterSlice = createSlice({
  name: 'breedsFilter',
  initialState,
  reducers: {},
});

export default breedsFilterSlice.reducer;
