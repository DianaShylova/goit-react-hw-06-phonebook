import {createSlice } from "@reduxjs/toolkit";

 const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const {addContact, deleteContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;