import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../model/expenseSlice';

export default configureStore({
  reducer: {
    expense: expenseReducer,
  },
});
