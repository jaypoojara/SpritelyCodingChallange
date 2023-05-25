import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../api';
import axiosInstance from '../../../axios/axios';
import {HomeScreenData} from '../../../types/redux/homeSlice';

export const homeScreenApiAsync = createAsyncThunk<HomeScreenData, undefined>(
  'home/apiCall',
  async () => {
    const response = await axiosInstance.get(API.homeScreen);
    return response.data;
  },
);
