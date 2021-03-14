import { createSlice } from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    expensedata: [],
  },
  reducers: {
    addnew: (state, action) => {
        return {
            ...state,
            expensedata: [action.payload, ...state.expensedata]
          }
    },
    deleteexpense: (state, action) => {
        return {
            ...state,
            expensedata: state.expensedata.filter(v => v.id !== action.payload)
        }
    },
   
  },
});

export const { addnew, deleteexpense } = expenseSlice.actions;

export const selectAllExpense = state => state.expense;

export default expenseSlice.reducer;
