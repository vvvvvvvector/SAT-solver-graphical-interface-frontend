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
      return { ...state, opened: action.payload };
    },
    setFirstSolution(state, action: PayloadAction<number[]>) {
      return { ...state, solutions: [action.payload] };
    },
    setNextSolution(state, action: PayloadAction<number[]>) {
      // return { ...state, solutions: [...state.solutions, action.payload] };
      state.solutions.push(action.payload);
    },
    clearSolutions(state) {
      if (state.solutions.length > 0) {
        return { ...state, solutions: [] };
      }
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
