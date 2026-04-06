import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

// Subscribe to store changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("books", JSON.stringify(state.books.list));
});

export default store;