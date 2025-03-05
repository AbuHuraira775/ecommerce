import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlices";
import authReducer from './slices/authSlice'
import productReducer from './slices/productSlice'

export default configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer,
        products: productReducer
    }
})

