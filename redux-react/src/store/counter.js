import { createSlice } from "@reduxjs/toolkit";

const initialCounter = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;