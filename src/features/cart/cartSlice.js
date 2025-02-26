import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    favorites: [],
    nextRead: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
     
      const book = action.payload;
      if (!state.favorites.find((b) => b.id === book.id)) {
        state.favorites.push(book);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter((book) => book.id !== action.payload);
    },
    
    addToNextRead: (state, action) => {
      const book = action.payload;
      if (!state.nextRead.find((b) => b.id === book.id)) {
        state.nextRead.push(book);
      }
    },
   
    removeFromNextRead: (state, action) => {
      state.nextRead = state.nextRead.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite, addToNextRead, removeFromNextRead } = cartSlice.actions;

export default cartSlice.reducer;
