import { createSlice } from "@reduxjs/toolkit";
import demoData from '../utils/demoData.js';

const initialState = {
    donators: demoData,
    orderBy: 'date',
    searchField: ''
}

const donatorsSlice = createSlice({
  name: "donators",
  initialState: initialState,
  reducers: {
    ADD_DONATOR: (state, action) => {
        state.donators = [action.payload, ...state.donators]
    },
    SET_ORDER_BY: (state, action) => {
      state.orderBy = action.paylaod
    },
    SET_SEARCH_FIELD: (state, action) => {
      state.searchField = action.payload
    }
  },
});

export default donatorsSlice;