import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice"
import searchReducer from "./features/searchState/searchSlice"
import bookSearchSlice from "./features/booksearch/bookSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        search: searchReducer,
        books: bookSearchSlice 
    }
})

export default store;