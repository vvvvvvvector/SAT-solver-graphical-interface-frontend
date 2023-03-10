import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  opened: true,
  solutions: [] as number[][],
};

export const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {
    setSolutionsOpened(state, action: PayloadAction<boolean>) {
      state.opened = action.payload;
    },
    setFirstSolution(state, action: PayloadAction<number[]>) {
      state.solutions = [action.payload];
    },
    setNextSolution(state, action: PayloadAction<number[]>) {
      state.solutions = [...state.solutions, action.payload];
    },
    clearSolutions(state) {
      state.solutions = [];
    },
  },
});

export const {
  setFirstSolution,
  setNextSolution,
  setSolutionsOpened,
  clearSolutions,
} = solutionsSlice.actions;

export default solutionsSlice.reducer;
