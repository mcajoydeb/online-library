import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/books";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: booksData,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload); // add to top
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;