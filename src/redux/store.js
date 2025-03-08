import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlices";
import authReducer from './slices/authSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import searchReducer from './slices/searchSlice'
import wishlistReducer from './slices/wishlistSlice'

export default configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        search: searchReducer,
        wishlists: wishlistReducer
    }
})

