import { createSlice } from '@reduxjs/toolkit';
import { propertyDetails } from '../../propertyDetails.js';

const initialState = {
  propertyData: propertyDetails,
  filteredPropertyData: propertyDetails,
  isLoading: false,
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    searchByAddress: (state, action) => {
      const filteredData = state.propertyData.filter(property =>
        property.address.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredPropertyData:
          action.payload.length > 0 ? filteredData : [...state.propertyData],
      };
    },
    addSelectedProperties: (state, action) => {},
  },
});

export const { searchByAddress } = tableSlice.actions;
export default tableSlice.reducer;
