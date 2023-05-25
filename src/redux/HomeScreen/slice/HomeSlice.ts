import {createSlice} from '@reduxjs/toolkit';
import {HomeInitialState} from '../../../types/redux/homeSlice';
import {homeScreenApiAsync} from '../action';

const initialState: HomeInitialState = {
  loading: null,
  data: null,
  error: null,
};

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(homeScreenApiAsync.pending, state => {
      state.loading = true;
      state.error = null;
      state.data = null;
    });
    builder.addCase(homeScreenApiAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(homeScreenApiAsync.rejected, state => {
      state.loading = false;
      state.data = null;
      state.error = 'Something went wrong, please try again later!';
    });
  },
});

export default homeSlice.reducer;
