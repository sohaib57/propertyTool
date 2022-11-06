import { createSlice } from '@reduxjs/toolkit';
import { propertyDetails } from '../../propertyDetails.js';

const initialState = {
  propertyData: propertyDetails,
  filteredPropertyData: propertyDetails,
  isLoading: false,
  selectedPropertyData: [],
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
    addSelectedProperties: (state, { payload }) => {
      const extractId = payload.tableRowId;
      const filteredData = propertyDetails.find(obj => obj.id === extractId);
      return {
        ...state,
        selectedPropertyData: [...state.selectedPropertyData, filteredData],
      };
    },
  },
});

export const { searchByAddress, addSelectedProperties } = tableSlice.actions;
export default tableSlice.reducer;
