// store/searchBarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: { isVisible: false },
  reducers: {
    showSearchBar: (state) => {
      state.isVisible = true;
    },
    hideSearchBar: (state) => {
      state.isVisible = false;
    },
    toggleSearchBar: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showSearchBar, hideSearchBar, toggleSearchBar } = searchBarSlice.actions;
export default searchBarSlice.reducer;
