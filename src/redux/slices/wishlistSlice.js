import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
  state: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.wishlistProducts = [...state.wishlistProducts, action.payload];
      console.log(state.wishlistProducts)
    },
    removeFromFavorite: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id != action.payload.id
      );

      return state;
    },
  },
});

export const { addToFavorite, removeFromFavorite } = wishlistSlice.actions;
export default wishlistSlice.reducer;
