import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) Redux => Cannot mutate states directly and we also need to return
      // const newState = [...state]
      // newState.push(action.payload)
      // returnn newState mandatory

      // Redux-toolKit(newer - Redux)
      // ALWAYS MUATTE A STATE OR RETURN A NEW STATE
      // mutating the state here , can directly mustate,
      // Redux used immer library and behind the scene does the immutability
      // return not required
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // Note-> Normal log will show proxy object and we cannot read it
      // so use current in log to show data
      console.log(state);
      console.log(current(state));
      state.items.length = 0;
      // ALWAYS MUATTE A STATE OR RETURN A NEW STATE
      // OR
      // return {items:[]}
    },
  },
});

console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
