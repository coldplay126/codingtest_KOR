import { createSlice } from '@reduxjs/toolkit';

const column = createSlice({
  name: 'columnPostion',
  initialState: { column: ['Image', 'Name', 'abv', 'ph', 'attenuation level'] },
  reducers: {
    columnPostion: (state, action) => {
      state.column = action.payload;
    },
  },
});

export default column.reducer;
