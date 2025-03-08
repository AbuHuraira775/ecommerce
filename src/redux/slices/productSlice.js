import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
        state.products = action.payload
    },
    addReview: (state, action)=>{
      const {productId, review} = action.payload
      const product = state.products.find( p => p.id == productId)
      if(product){
        product.reviews.push(review)
      }
      console.log("product ",product)
    }
  },
});

export const { getProducts,addReview } = productSlice.actions;
export default productSlice.reducer;
