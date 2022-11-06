import { createSlice } from '@reduxjs/toolkit';
import { propertyDetails } from '../../propertyDetails.js';

const initialState = {
  propertyData: propertyDetails,
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
