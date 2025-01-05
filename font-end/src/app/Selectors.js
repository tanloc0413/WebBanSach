import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;

// cart
export const cartSelector = cartItemsSelector;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

//cart
export const userInfor = (state) => state.user.userInfo;
export const userid = (state) => state.user.userInfo ? state.user.userInfo.id:null;

export const isAuthenticatedSelector = (state) => state.user.isAuthenticated;

//favourite
export const favouritesSelector = (state) => state.favourite.favouriteItems;
