import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    // showMiniCart(state) {
    //   state.showMiniCart = true;
    // },

    // hideMiniCart(state) {
    //   state.showMiniCart = false;
    // },

    addToCart(state, action) {
      // newItem = { product, quantity }
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeCart(state) {
      state.cartItems =[];
      console.log('state.cartItems',state.cartItems);
    },
    
    removeFromCart(state, action) {
      const {id} = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== id);
      console.log('state.cartItems',state.cartItems);
    },
    


  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart,removeCart } = actions; // named export
export default reducer; // default export