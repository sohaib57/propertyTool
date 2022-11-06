import { configureStore } from '@reduxjs/toolkit';
import tableReducer from '../redux/tablemodel/TableSlice.js';

export const store = configureStore({
  reducer: { table: tableReducer },
});
