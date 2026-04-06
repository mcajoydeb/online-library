import { createSlice } from "@reduxjs/toolkit";
import defaultBooks from "../data/books";

// Load from localStorage
const loadBooks = () => {
  try {
    const data = localStorage.getItem("books");
    return data ? JSON.parse(data) : defaultBooks;
  } catch {
    return defaultBooks;
  }
};

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: loadBooks(),
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload);

      // Save to localStorage
      localStorage.setItem("books", JSON.stringify(state.list));
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;