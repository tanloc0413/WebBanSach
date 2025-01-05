import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    setFavourite(state, action) {
      // newItem = { product }
      const newItem = action.payload;
      const index = state.favouriteItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        state.favouriteItems = state.favouriteItems.filter((x) => x.id !== newItem.id);
      } else {
        state.favouriteItems.push(newItem);
      }
    },
    removeFavourite(state) {
      state.favouriteItems = [];
      console.log("state.favouriteItems", state.favouriteItems);
    },
  },
});

const { actions, reducer } = favouriteSlice;
export const { setFavourite, removeFavourite } = actions; // named export
export default reducer; // default export
