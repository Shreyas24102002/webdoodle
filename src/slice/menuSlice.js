import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

// A slice is nothing but collection of Redux reducer logic and actions for a single feature
// in your app and it is defined together in a single file.
const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMeniItem: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { menuItemClick, actionItemClick } = menuSlice.actions;

export default menuSlice.reducer;
