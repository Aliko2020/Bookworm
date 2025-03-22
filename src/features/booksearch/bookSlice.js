import { createSlice } from "@reduxjs/toolkit";

const bookSearchSlice = createSlice({
    name: "bookSearch", 
    initialState: {
        books: [] 
    },
    reducers: {
        addSearchBook: (state, action) => {
            const book = action.payload;
            if (book) {
                state.books.push(book); 
            }
        }
    }
});


export const { addSearchBook } = bookSearchSlice.actions;
export default bookSearchSlice.reducer;
