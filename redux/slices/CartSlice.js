import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("Product added to cart:", action.payload);
      const { id, title, image, price } = action.payload;
      // check if the item already exist
      const existingProduct = state.find((item) => item.id === id);
      if(existingProduct){
        existingProduct.qty += 1 
      } else{
          state.push({
        id,
        title,
        image,
        price,
        qty: 1,
      });
      }
    
    },
    removeFromCart: (state, action) => {
      // alert("deleted");
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId)
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      // check if the item already exist
      const existingProduct = state.find((item) => item.id === cartId);
      if(existingProduct){
        existingProduct.qty += 1
      } 
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      // check if the item already exist
      const existingProduct = state.find((item) => item.id === cartId);
      if(existingProduct && existingProduct.qty > 1){
        existingProduct.qty -= 1
      } 
    },
  },
});

export const { addToCart, decrementQty, incrementQty, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
