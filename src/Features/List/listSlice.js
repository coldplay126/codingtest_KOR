import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchList = createAsyncThunk('fetchList', async () => {
  return axios
    .get('https://api.punkapi.com/v2/beers')
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
});

const ListSlice = createSlice({
  name: 'beerList',
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [fetchList.pending]: (state) => {
      state.loading = true;
    },
    [fetchList.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    [fetchList.rejected]: (state) => {
      state.list = '';
      state.loading = true;
    },
  },
});

export default ListSlice;
