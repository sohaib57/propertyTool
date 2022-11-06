import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  propertyData: [],
  isLoading: false,
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addCategory: () => {},
  },
});

export const { addCategory } = tableSlice.actions;
export default tableSlice.reducer;
